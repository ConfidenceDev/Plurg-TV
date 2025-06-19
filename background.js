chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension Installed");
});

chrome.runtime.onMessage.addListener((obj, sender, response) => {
  console.log(obj);

  if (obj.tag === "err") {
    console.log(obj);
  } else if (obj.tag === "loadTV") {
    chrome.windows.getAll({ populate: true }, (windows) => {
      let tvWindowFound = false;
      windows.forEach((window) => {
        window.tabs.forEach((tab) => {
          if (tab.url.includes("tv.html")) {
            tvWindowFound = true;
            const payload = {
              tag: "isOpen",
              answer: true,
            };
            chrome.runtime.sendMessage(payload);
            if (obj.open) chrome.tabs.sendMessage(tab.id, obj, null);
          }
        });
      });

      if (!tvWindowFound) {
        const payload = {
          tag: "isOpen",
          answer: false,
        };
        chrome.runtime.sendMessage(payload);
        console.log("No active TV window found.");
      }
    });
  } else if (obj.tag === "next") {
    obj.tag = "sendNext";
    chrome.runtime.sendMessage(obj);
  }
});
