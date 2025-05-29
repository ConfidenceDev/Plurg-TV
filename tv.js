document.addEventListener("DOMContentLoaded", () => {
  const prevStream = document.querySelector(".prevStream");
  const nextStream = document.querySelector(".nextStream");
  const options = {
    autoplay: true,
    controls: true,
    sources: [],
  };
  const videoTV = videojs("tv", options, function onPlayerReady() {
    videojs.log("TV Live!");
  });

  chrome.runtime.onMessage.addListener((obj, sender, sendResponse) => {
    if (obj.tag === "loadTV") {
      loadTV(obj);
      sendResponse({ success: true });
    }
  });

  function loadTV(obj) {
    const isHLS = (url) => {
      return url && url.endsWith(".m3u8");
    };

    if (!obj.reload) return;

    prevStream.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(obj);

      if (obj.id < 1) return;
      if (obj.isAd) return;

      chrome.runtime.sendMessage({
        tag: "prev",
        id: parseInt(obj.id - 1),
        isAd: obj.isAd,
      });
    });

    nextStream.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(obj);

      if (obj.isAd) return;
      chrome.runtime.sendMessage({
        tag: "next",
        id: obj.id,
        isAd: obj.isAd,
      });
    });

    videoTV.on("ended", () => {
      chrome.runtime.sendMessage({
        tag: "next",
        id: obj.id,
        isAd: obj.isAd,
      });
    });

    if (isHLS(obj.url)) {
      videoTV.src({ src: obj.url, type: "application/x-mpegURL" });
      videoTV.play();
      return;
    }

    videoTV.src({ src: obj.url, type: "video/mp4" });
    videoTV.play();
  }
});
