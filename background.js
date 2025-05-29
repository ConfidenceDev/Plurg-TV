chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension Installed");
});

chrome.runtime.onMessage.addListener((obj, sender, response) => {
  if (obj.tag === "err") {
    console.log(obj);
  } else if (obj.tag === "loadTV") {
    chrome.windows.getAll({ populate: true }, (windows) => {
      let tvWindowFound = false;
      obj.tag = "loadTVStream";
      windows.forEach((window) => {
        window.tabs.forEach((tab) => {
          if (tab.url.includes("tv.html")) {
            tvWindowFound = true;
            chrome.tabs.sendMessage(tab.id, obj, null);
          }
        });
      });

      if (!tvWindowFound) {
        console.log("No active TV window found.");
      }
    });
  } else if (obj.tag === "vidDone") {
    obj.tag = "sendVidDone";
    chrome.runtime.sendMessage(obj);
  }
});
