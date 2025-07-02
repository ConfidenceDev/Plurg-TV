const splashCover = document.querySelector(".splash");
const homeCover = document.querySelector(".home_cover");
const brandSpinner = document.querySelector(".brand_spinner");
const count = document.querySelector(".ac_count");
const refreshBtn = document.querySelector(".refresh_btn");
const channelsNav = document.querySelector(".channels");
const prevChannelItem = document.querySelector(".prevChannel");
const nextChannelItem = document.querySelector(".nextChannel");
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
const helpBtn = document.querySelector(".help_btn");
const modal = document.querySelector(".alert");
const alert_msg = document.querySelector(".alert_msg");

function scrollByAmount(amount) {
  channelsNav.scrollBy({ left: amount, behavior: "smooth" });
}

prevChannelItem.addEventListener("click", () => scrollByAmount(-100));
nextChannelItem.addEventListener("click", () => scrollByAmount(100));

//================================== Initialize =======================================
//const socket = io("https://plurg-server.onrender.com");
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

const version = chrome.runtime.getManifest().version;

chrome.storage.local.get("userProfile", (result) => {
  if (result.userProfile) {
    userRecord = result.userProfile;
    signInBtn.innerText = "Sign Out";
    sessionEl.innerText = `Signed in as: ${result.userProfile.email}`;
  } else sessionEl.innerText = "";
});

chrome.storage.local.get("currentChannel", (result) => {
  if (!result.currentChannel) {
    channelsNav.children[1].classList.add("ch_sel");
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

helpBtn.addEventListener("click", (e) => {
  e.preventDefault();
  alert(
    `* Swap between TV channels by clicking the channel of choice.
* TV streams update regularly; check now showing and up next for more info.
* Member Count shows the number of members present in the same channel.
* Keep chat civil and respectful. The user report option would be available soon.
* Enjoy 😊
    `
  );
});

//================================== Connect ========================================
socket.on("connect", () => {
  brandSpinner.style.display = "none";
  session = socket.id;
  let clientId = null;
  let isLaunched = true;
  socket.once("onclient", (obj) => {
    clientId = obj;
  });

  socket.emit("join-room", channel);
  socket.emit("showing", channel);
  socket.emit("version", version);
  let winObj = null;

  socket.on("nom", (obj) => {
    count.innerText = toComma(obj);
  });

  socket.on("version", (obj) => {
    alert_msg.innerText =
      "A new version of PlurgTV is available, update for better experience";
    modal.style.display = "block";
    document.querySelector(".alert_yes").onclick = () => {
      chrome.tabs.create({
        url: "https://chromewebstore.google.com/detail/plurg/okkckmldiolpfjignfpblddgmfbncpfl",
      });
      modal.style.display = "none";
    };

    document.querySelector(".alert_no").onclick = () => {
      modal.style.display = "none";
    };
  });

  if (!socket.hasListeners("showing")) {
    socket.on("showing", (obj) => {
      //chrome.runtime.sendMessage({ tag: "err", msg: obj });
      console.log(obj);

      obj.channel = channel;
      obj.open = true;
      if (obj.now) nowShow.innerText = obj.now;
      if (obj.next) nextShow.innerText = obj.next;
      winObj = obj;
      if (!isLaunched) chrome.runtime.sendMessage(winObj);
      isLaunched = false;
    });
  }

  if (!window.hasMessageListener) {
    chrome.runtime.onMessage.addListener((obj, sender, response) => {
      console.log(obj);
      if (obj.tag === "next") {
        obj.channel = channel;
        socket.emit("next", obj);
      } else if (obj.tag === "prev") {
        obj.channel = channel;
        socket.emit("prev", obj);
      }
    });
    window.hasMessageListener = true;
  }

  //================================== START TV =======================================
  if (!window.listenerAdded) {
    channelsNav.addEventListener("click", (e) => {
      e.preventDefault();
      chrome.runtime
        .sendMessage({ tag: "ping", answer: false })
        .then((res) => {
          console.log(res);

          for (let i = 0; i < channelsNav.children.length; i++) {
            channelsNav.children[i].classList.remove("ch_sel");
          }

          const element =
            e.target.tagName !== "DIV" ? e.target.parentNode : e.target;
          prevChannel = channel;
          element.classList.add("ch_sel");
          channel = element.getAttribute("data-id");
          chrome.storage.local.set({ currentChannel: channel });
          loadMessages();

          if (prevChannel !== channel) {
            socket.emit("leave-room", prevChannel);
            socket.emit("join-room", channel);
          }
          console.log(prevChannel, channel);
          socket.emit("showing", channel);

          if (res == undefined) createTVWindow();
          else if (winObj) chrome.runtime.sendMessage(winObj);
        })
        .catch((err) => {
          console.log(err);
        });
    });
    window.listenerAdded = true;
  }

  async function createTVWindow() {
    const url = "tv.html";
    const minWidth = 320;
    const minHeight = 270;
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
        setTimeout(() => {
          if (winObj) chrome.runtime.sendMessage(winObj);
        }, 700);
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

      chrome.storage.local.set({ [channel]: messages });
      threadList.scrollTop = threadList.scrollHeight;
    });
  });

  socket.on("delete-message", (obj) => {
    noMsgs.style.display = "none";
    chrome.storage.local.get([channel], (result) => {
      let messages = result[channel] || [];
      messages = messages.filter((item) => item.msgId !== obj);
      chrome.storage.local.set({ [channel]: messages });
      const allItems = document.querySelectorAll(".thread li");

      allItems.forEach((item) => {
        if (item.dataset.id === obj) {
          item.remove();
        }
      });
      threadList.scrollTop = threadList.scrollHeight;
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
      userId: userRecord.userId,
      username: userRecord.username,
      img: userRecord.img,
      channel: channel,
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
        alert("Success, signin in progess...");
        const token = redirectUrl.match(/access_token=([^&]+)/)[1];

        fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => response.json())
          .then((user) => {
            const uuid = crypto.randomUUID();
            const obj = {
              userId: uuid,
              username: user.name,
              img: user.picture,
              email: user.email,
            };
            chrome.storage.local.set({ userProfile: obj });
            chrome.storage.local.set({ userToken: token });
            socket.emit("loadUser", obj);

            userRecord = obj;
            signInBtn.innerText = "Sign Out";
            sessionEl.innerText = `Signed in as: ${obj.email}`;
            spinner.style.display = "none";
          })
          .catch((error) => {
            console.error("Failed to get user info:", error);
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
    chrome.storage.local.get("userToken", (result) => {
      if (result.userToken) {
        fetch(
          `https://accounts.google.com/o/oauth2/revoke?token=${result.userToken}`,
          {
            method: "POST",
            headers: {
              "Content-type": "application/x-www-form-urlencoded",
            },
          }
        )
          .then((response) => {
            if (response.ok) {
              chrome.storage.local.remove("userProfile", () => {
                sessionEl.innerText = "";
                spinner.style.display = "none";
                signInBtn.innerText = "Sign In with Google";
                userRecord = null;
              });
              chrome.storage.local.remove("userToken");
            } else {
              console.error("Failed to revoke token:", response);
            }
          })
          .catch((error) =>
            console.error("Error during token revocation:", error)
          );
      }
    });
  }

  window.addEventListener("beforeunload", () => {
    socket.emit("leave-room", channel);
    socket.disconnect();
  });
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
  li.setAttribute("data-id", data.msgId);

  const urlPattern =
    /(https?:\/\/(?:www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(?:\/[^\s]*)?)/g;
  const modifiedMsg = data.msg.replace(urlPattern, (url) => {
    return `<a href="${url}" class="thread_url" target="_blank">${url}</a>`;
  });

  const fromMe = data.userId === userRecord.userId ? "show" : "";
  const notFromMe = data.userId !== userRecord.userId ? "show" : "";

  li.innerHTML = `<div class="li_cover">
        <img class="thread_avatar" src="${data.img}" />
        <div class="li_content">
          <label class="thread_username">${data.username}</label>
          <label class="thread_date">${data.date}</label>
          <label class="thread_content">${modifiedMsg}</label> 
          <div class="thread_actions">
            <button class="thread_delete ${fromMe}">Delete</button>
            <button class="thread_flag ${notFromMe}">Flag</button>
          </div>  
        </div>
      </div>
      <hr />`;

  li.querySelector(".thread_delete").addEventListener("click", () => {
    alert_msg.innerText = "Are you sure you want to delete comment?";
    modal.style.display = "block";
    document.querySelector(".alert_yes").onclick = () => {
      const payload = {
        msgId: data.msgId,
        channel: channel,
      };
      socket.emit("delete-message", payload);
      modal.style.display = "none";
    };

    document.querySelector(".alert_no").onclick = () => {
      modal.style.display = "none";
    };
  });

  li.querySelector(".thread_flag").addEventListener("click", () => {
    alert_msg.innerText = "Are you sure you want to flag(report) comment?";
    modal.style.display = "block";
    document.querySelector(".alert_yes").onclick = () => {
      socket.emit("flag-message", data);
      modal.style.display = "none";
    };

    document.querySelector(".alert_no").onclick = () => {
      modal.style.display = "none";
    };
  });

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
