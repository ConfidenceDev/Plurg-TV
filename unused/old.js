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
const size = 10;
let isRefresh = false;
let isHome = true;
let session = null;
let tvWindowId = null;
let userRecord = {
  username: "John",
  img: "avatar.png",
  email: "test@test.com",
};
let prevChannel = null;
let channel = "All";
let isMenu = false;

//chrome.storage.local.remove("tvId", null);
chrome.storage.local.get("tvId", (result) => {
  if (result.tvId) tvWindowId = result.tvId;
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
    isHome = false;
    isMenu = true;
  } else {
    settingsBtn.src = "./icons/menu.png";
    midMenu.style.display = "none";
    threadList.style.display = "flex";
    bottomNav.style.display = "flex";
    isHome = true;
    isMenu = false;
  }
});

//================================== Sign In =======================================
signInBtn.addEventListener("click", (e) => {
  e.preventDefault();
  spinner.style.display = "flex";

  if (userRecord != null) {
    chrome.storage.local.remove("userProfile", () => {
      revokeAuthToken();
      sessionEl.innerText = "";
      spinner.style.display = "none";
    });
    return;
  }

  const clientId =
    "844674369242-aqqk83ks12ct0d8v3t4tsqkp6j13t6lq.apps.googleusercontent.com";
  const redirectUri = `https://${chrome.runtime.id}.chromiumapp.org`;
  const authUrl = `https://accounts.google.com/o/oauth2/auth?response_type=token&client_id=${clientId}&redirect_uri=${redirectUri}&scope=email%20profile`;

  chrome.identity.launchWebAuthFlow(
    {
      url: authUrl,
      interactive: true,
    },
    (redirectUrl) => {
      if (chrome.runtime.lastError || !redirectUrl) {
        chrome.runtime.sendMessage({
          tag: "bgs",
          msg: chrome.runtime.lastError,
          url: redirectUrl,
        });
        //console.error(chrome.runtime.lastError.message);
        return;
      }

      chrome.runtime.sendMessage({
        tag: "bgs",
        msg: "Passed",
        url: redirectUrl,
      });

      // Extract the access token from the redirect URL
      const token = redirectUrl.match(/access_token=([^&]+)/)[1];
      const credential = firebase.auth.GoogleAuthProvider.credential(
        null,
        token
      );

      chrome.runtime.sendMessage({
        tag: "bgs",
        msg: "Credential",
        url: credential,
      });

      firebase
        .auth()
        .signInWithCredential(credential)
        .then((result) => {
          const user = result.user;

          chrome.runtime.sendMessage({ tag: "bgs", msg: "User", url: user });
          if (user) {
            const obj = {
              username: user.displayName,
              img: user.photoURL,
              email: user.email,
            };
            chrome.storage.local.set({ userProfile: obj });
            userRecord = userProfile;
            signInBtn.innerText = "Sign Out";
            sessionEl.innerText = `Signed in as: ${obj.email}`;
            spinner.style.display = "none";
          }
        });
      /*.catch((error) => {
          console.error("Sign-in error:", error);
        });*/
    }
  );
});

function revokeAuthToken() {
  chrome.identity.getAuthToken({ interactive: false }, (token) => {
    if (token) {
      // Revoke the token
      fetch(`https://accounts.google.com/o/oauth2/revoke?token=${token}`)
        .then(() => {
          // Remove token from Chrome's cache
          chrome.identity.removeCachedAuthToken({ token }, () => {
            console.log("Google OAuth token revoked and removed from cache.");
          });
        })
        .catch((error) => {
          console.error("Error revoking token:", error);
        });
    } else {
      console.log("No token found to revoke.");
    }
  });
}

//================================== START TV =======================================
chrome.runtime.sendMessage({
  tag: "init",
  join: channel,
});

chrome.runtime.onMessage.addListener((obj, sender, sendResponse) => {
  if (obj.tag === "count") {
    count.innerText = toComma(obj.count);
  } else if (obj.tag === "showing") {
    nowShow.innerText = obj.now;
    nextShow.innerText = obj.next;
  } else if (obj.tag === "message") {
    noMsgs.style.display = "none";
    threadList.append(addItem(obj.content));
    chrome.storage.local.get([channel], (result) => {
      let messages = result[channel] || [];

      messages.push(obj);
      if (messages.length > 10) messages.shift();

      chrome.storage.local.set({ [channel]: messages });
      threadList.scrollTop = threadList.scrollHeight;

      /* //===================== Delete Item =================
        const liDel = threadList.querySelector(`li[data-id="${obj.id}"]`);
        if (liDel) threadList.removeChild(liDel);*/
    });
  }
});

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

  if (prevChannel === channel) return;

  chrome.runtime.sendMessage({
    tag: "loadRoom",
    leave: prevChannel,
    join: channel,
  });

  if (tvWindowId === null) {
    //createTVWindow();
  } else {
    //chrome.windows.remove(tvWindowId);
    //chrome.storage.local.remove("tvId", null);
    //chrome.runtime.sendMessage({ tag: "loadTV", channel: channel });
  }
});

function createTVWindow() {
  const minWidth = 300;
  const minHeight = 250;
  chrome.windows.create(
    {
      url: `tv.html?channel=${channel}`,
      type: "popup",
      width: minWidth,
      height: minHeight,
      focused: true,
      state: "normal",
    },
    (window) => {
      //chrome.storage.local.set({ tvId: window.id });
      tvWindowId = window.id;
    }
  );
}

//================================== Chat ========================================
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
  chrome.runtime.sendMessage({ tag: "newMessage", content: obj });
  writeField.value = null;
  wordCount.innerText = "0/127";
});

chrome.windows.onRemoved.addListener((closedWindowId) => {
  if (closedWindowId === tvWindowId) tvWindowId = null;
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
        <img src="./icons/${data.img}" />
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
  chrome.storage.local.remove([channel], null);
  threadList.innerHTML = "";
  noMsgs.style.display = "block";
});

function toComma(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
