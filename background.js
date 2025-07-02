chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension Installed");
});

chrome.runtime.onMessage.addListener((obj, sender, response) => {
  console.log(obj);

  if (obj.tag === "err") {
    console.log(obj);
  } else if (obj.tag === "ping") {
    chrome.windows.getAll({ populate: true }, (windows) => {
      let tvWindowFound = false;
      windows.forEach((window) => {
        window.tabs.forEach((tab) => {
          if (tab.url.includes("tv.html")) {
            tvWindowFound = true;
            obj.answer = true;
            //chrome.runtime.sendMessage(obj);
            //obj.tag = "tv";
            //if (obj.open) chrome.tabs.sendMessage(tab.id, obj, null);
            response(obj);
          }
        });
      });

      if (!tvWindowFound) {
        obj.answer = false;
        //chrome.runtime.sendMessage(obj);
        console.log("No active TV window found.");
        response(obj);
      }
    });
  }
});
