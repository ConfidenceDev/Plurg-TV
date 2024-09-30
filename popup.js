const splashCover = document.querySelector(".splash");
const homeCover = document.querySelector(".home_cover");
const count = document.querySelector(".ac_count");
const refreshBtn = document.querySelector(".refresh_btn");
const channelsNav = document.querySelector(".channels");
const threadList = document.querySelector(".thread");
const wordCount = document.querySelector(".word_count");
const bottomNav = document.querySelector(".bottom");
const urlField = document.querySelector(".url_field");
const writeField = document.querySelector(".write_field");
const writeBtn = document.querySelector(".write_btn");
const settingsBtn = document.querySelector(".settings");
const midMenu = document.querySelector(".mid_menu");
const noMsgs = document.querySelector(".no_msgs");
const nowShow = document.querySelector(".now");
const nextShow = document.querySelector(".next");
const signInBtn = document.querySelector(".signin_btn");
const spinner = document.querySelector(".spinner");
const sessionEl = document.querySelector(".session");

//================================== Initialize =======================================
const socket = io("http://localhost:5000");
const size = 10;
let isHome = true;
let session = null;
let tvWindowId = null;
let userRecord = null;
let prevChannel = null;
let channel = "All";
let isMenu = false;

setTimeout(() => {
  splashCover.style.display = "none";
  homeCover.style.display = "block";
}, 2000);

//chrome.storage.local.remove("tvId");
chrome.storage.local.get("tvId", (result) => {
  if (result.tvId) tvWindowId = result.tvId;
  //console.log(tvWindowId);
});

chrome.storage.local.get("userProfile", (result) => {
  if (result.userProfile) {
    userRecord = result.userProfile;
    signInBtn.innerText = "Sign Out";
    sessionEl.innerText = `Signed in as: ${result.userProfile.email}`;

    console.log(result.userProfile);
  } else sessionEl.innerText = "";
});

chrome.storage.local.get("currentChannel", (result) => {
  if (!result.currentChannel) {
    channelsNav.children[0].classList.add("ch_sel");
    loadMessages();
    return;
  }

  channel = result.currentChannel;
  for (let i = 0; i < channelsNav.children.length; i++) {
    if (
      result.currentChannel === channelsNav.children[i].getAttribute("data-id")
    ) {
      channelsNav.children[i].classList.add("ch_sel");
    }
  }
  loadMessages();
});

settingsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (isHome) {
    settingsBtn.src = "./icons/close.png";
    threadList.style.display = "none";
    bottomNav.style.display = "none";
    midMenu.style.display = "flex";
    noMsgs.style.display = "none";
    isHome = false;
    isMenu = true;
  } else {
    settingsBtn.src = "./icons/menu.png";
    midMenu.style.display = "none";
    threadList.style.display = "flex";
    bottomNav.style.display = "flex";
    if (!threadList.querySelectorAll("li").length > 0)
      noMsgs.style.display = "block";
    isHome = true;
    isMenu = false;
  }
});

//================================== Connect ========================================
socket.on("connect", () => {
  session = socket.id;
  let clientId = null;
  socket.on("onclient", (obj) => {
    clientId = obj;
  });

  socket.emit("join-room", channel);
  let winObj = null;

  socket.on("nom", (obj) => {
    count.innerText = toComma(obj);
  });

  socket.on("showing", (obj) => {
    obj.data.id = obj.id;
    obj = obj.data;
    nowShow.innerText = obj.now;
    nextShow.innerText = obj.next;
    //chrome.runtime.sendMessage({ tag: "err", msg: obj });
    chrome.runtime.sendMessage({ ...obj });
    winObj = obj;
  });

  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    if (obj.tag === "sendVidDone") {
      const sendObj = {
        id: obj.id,
        channel: channel,
      };
      socket.emit("vidDone", sendObj);
    }
  });

  //================================== START TV =======================================
  channelsNav.addEventListener("click", (e) => {
    e.preventDefault();
    for (let i = 0; i < channelsNav.children.length; i++) {
      channelsNav.children[i].classList.remove("ch_sel");
    }

    const element = e.target.tagName !== "DIV" ? e.target.parentNode : e.target;
    prevChannel = channel;
    element.classList.add("ch_sel");
    channel = element.getAttribute("data-id");
    chrome.storage.local.set({ currentChannel: channel });
    loadMessages();

    if (prevChannel !== channel) {
      socket.emit("leave-room", prevChannel);
      socket.emit("join-room", channel);
    }

    if (tvWindowId === null) createTVWindow();
    chrome.windows.update(tvWindowId, { focused: true });
    socket.emit("showing", channel);
  });

  async function createTVWindow() {
    const sTObj = await new Promise((resolve) => {
      chrome.storage.local.get(["videoTimestamp"], (result) => {
        resolve(result.videoTimestampObj || 0);
      });
    });

    let url = "tv.html";
    if (sTObj != 0)
      url = `tv.html?timstamp=${sTObj.timestamp}&channel=${sTObj.channel}&title=${sTObj.title}`;

    const minWidth = 300;
    const minHeight = 250;
    chrome.windows.create(
      {
        url: url,
        type: "popup",
        width: minWidth,
        height: minHeight,
        focused: true,
        state: "normal",
      },
      (window) => {
        tvWindowId = window.id;
        chrome.storage.local.set({ tvId: window.id });
        setTimeout(() => {
          if (winObj) chrome.runtime.sendMessage({ ...winObj });
        }, 500);
      }
    );
  }

  socket.on("message", (obj) => {
    noMsgs.style.display = "none";
    threadList.append(addItem(obj));
    chrome.storage.local.get([channel], (result) => {
      let messages = result[channel] || [];

      messages.push(obj);
      if (messages.length > 10) messages.shift();

      console.log("Incoming: ", messages);
      chrome.storage.local.set({ [channel]: messages });
      threadList.scrollTop = threadList.scrollHeight;

      /* //===================== Delete Item =================
      const liDel = threadList.querySelector(`li[data-id="${obj.id}"]`);
      if (liDel) threadList.removeChild(liDel);*/
    });
  });

  writeField.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      writeBtn.click();
    }
  });

  writeField.addEventListener("input", (e) => {
    const target = e.currentTarget;
    const currentLength = target.value.length;
    wordCount.innerText = `${currentLength}/127`;
  });

  writeBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const content = writeField.value;

    if (content == null || content == "") {
      alert("A message is required");
      return;
    }

    if (userRecord == null) {
      alert("You need to sign in first!");
      return;
    }

    const obj = {
      type: "message",
      msg: content,
      username: userRecord.username,
      img: userRecord.img,
      email: userRecord.email,
    };
    socket.emit("message", obj);
    writeField.value = null;
    wordCount.innerText = "0/127";
  });

  //================================== Sign In =======================================
  signInBtn.addEventListener("click", (e) => {
    e.preventDefault();
    spinner.style.display = "flex";

    if (userRecord != null) {
      signOut();
      return;
    }

    const redirectUri = `https://${chrome.runtime.id}.chromiumapp.org`;
    const authUrl = `https://accounts.google.com/o/oauth2/auth?response_type=token&client_id=${clientId}&redirect_uri=${redirectUri}&scope=email%20profile`;

    if (clientId === null) return;

    chrome.identity.launchWebAuthFlow(
      {
        url: authUrl,
        interactive: true,
      },
      (redirectUrl) => {
        if (chrome.runtime.lastError || !redirectUrl) {
          chrome.runtime.sendMessage({
            tag: "err",
            msg: chrome.runtime.lastError,
            url: redirectUrl,
          });
          return;
        }
        alert("Success signin in progess...");
        // Extract the access token from the redirect URL
        const token = redirectUrl.match(/access_token=([^&]+)/)[1];
        const credential = firebase.auth.GoogleAuthProvider.credential(
          null,
          token
        );

        firebase
          .auth()
          .signInWithCredential(credential)
          .then((result) => {
            const user = result.user;

            chrome.runtime.sendMessage({
              tag: "err",
              msg: "User",
              url: user,
            });

            if (user) {
              const obj = {
                username: user.displayName,
                img: user.photoURL,
                email: user.email,
              };
              chrome.storage.local.set({ userProfile: obj });
              userRecord = obj;
              signInBtn.innerText = "Sign Out";
              sessionEl.innerText = `Signed in as: ${obj.email}`;
              spinner.style.display = "none";
            }
          })
          .catch((error) => {
            console.error("Sign-in error:", error);
            chrome.runtime.sendMessage({
              tag: "err",
              msg: "Failed",
              url: error,
            });
          });
      }
    );
  });

  function signOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        chrome.storage.local.remove("userProfile", () => {
          sessionEl.innerText = "";
          spinner.style.display = "none";
          signInBtn.innerText = "Sign In with Google";
          userRecord = null;
        });
      })
      .catch((error) => {
        console.error("Error signing out", error);
      });
  }
});

chrome.windows.onRemoved.addListener((closedWindowId) => {
  if (closedWindowId === tvWindowId) {
    tvWindowId = null;
    chrome.storage.local.remove("tvId");
  }
});

function loadMessages() {
  chrome.storage.local.get([channel], (result) => {
    const messages = result[channel] || [];
    threadList.innerHTML = "";

    if (messages.length < 1 && !isMenu) noMsgs.style.display = "block";
    else noMsgs.style.display = "none";

    messages.forEach((obj, index) => {
      threadList.append(addItem(obj));
    });
    threadList.scrollTop = threadList.scrollHeight;
  });
}

function addItem(data) {
  const li = document.createElement("li");
  li.setAttribute("data-id", data.userId);

  const urlPattern =
    /(https?:\/\/(?:www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(?:\/[^\s]*)?)/g;
  // Replace URLs in the text with anchor tags
  const modifiedMsg = data.msg.replace(urlPattern, (url) => {
    return `<a href="${url}" class="thread_url" target="_blank">${url}</a>`;
  });

  li.innerHTML = `<div class="li_cover">
        <img src="${data.img}" />
        <div class="li_content">
          <label class="thread_username">${data.username}</label>
          <label class="thread_date">${data.date}</label>
          <label class="thread_content">${modifiedMsg}</label>   
        </div>
      </div>
      <hr />`;
  return li;
}

refreshBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  if (isMenu) return;
  chrome.storage.local.remove([channel], null);
  threadList.innerHTML = "";
  noMsgs.style.display = "block";
});

function toComma(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
