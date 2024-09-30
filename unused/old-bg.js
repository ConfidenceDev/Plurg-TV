/*chrome.runtime.onInstalled.addListener(() => {
  // Initialize the socket connection
  //const socket = io("http://localhost:5000");
  //console.log(socket);

  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const socket = io("http://localhost:5000");
    console.log(socket);
  });
});*/

/*chrome.runtime.onInstalled.addListener(() => {
  //console.log("Extension installed.");
  const socket = io("http://localhost:5000");

  socket.on("connect", () => {
    socket.on("nom", (obj) => {
      chrome.runtime.sendMessage({
        tag: "count",
        count: obj,
      });
    });

    socket.on("showing", (obj) => {
      chrome.runtime.sendMessage({
        tag: "showing",
        now: obj.now,
        next: obj.next,
      });
    });
  });

  socket.on("message", (obj) => {
    chrome.runtime.sendMessage({
      tag: "message",
      content: obj,
    });
  });*/

/*chrome.runtime.onMessage.addListener((obj, sender, response) => {
    if (obj.tag === "err") {
      console.log(obj.msg, obj.url);
    } else if (obj.tag === "loadTV") {*/
//chrome.tabs.query({ url: "*://*/tv.html*" }, (tabs) => {
/*if (tabs.length > 0) {
          // Assume the first tab with the matching tv.html
          chrome.tabs.sendMessage(tabs[0].id, obj, () => {
            if (chrome.runtime.lastError)
              console.error(
                "Error sending message to tv.js:",
                chrome.runtime.lastError
              );
          });
        } else {
          console.log("No active TV window found.");
        }
      });
    } else if (obj.tag === "init") {
      socket.emit("join-room", obj.join);
    } else if (obj.tag === "loadRoom") {
      socket.emit("leave-room", obj.leave);
      socket.emit("join-room", obj.join);
    } else if (obj.tag === "newMessage") {
      socket.emit("message", obj.content);
    }
  });
});*/
