document.addEventListener("DOMContentLoaded", () => {
  const navStream = document.querySelector(".nav_streams");
  const prevStream = document.querySelector(".prev_stream");
  const nextStream = document.querySelector(".next_stream");
  const adContainer = document.querySelector(".ad_container");
  const adClose = document.querySelector(".ad_close");

  let isPrev = false;
  let prevListener = false;
  let nextListener = false;
  let adCloseLisener = false;
  const closeCount = 3000;

  const options = {
    autoplay: true,
    controls: true,
    sources: [],
    vtt: {
      js: "libs/vtt.min.js",
    },
  };
  const videoTV = videojs("tv", options, function onPlayerReady() {
    videojs.log("TV Live!");
  });

  if (!window.hasListener) {
    chrome.runtime.onMessage.addListener((obj, sender, sendResponse) => {
      console.log(obj);
      if (obj.tag === "tv") {
        loadTV(obj);
      }
      sendResponse({ success: true });
    });
    window.hasListener = true;
  }

  function loadTV(obj) {
    enableUI();
    const isHLS = (url) => {
      return url && url.endsWith(".m3u8");
    };

    console.log(prevListener, nextListener);
    if (!prevListener) {
      prevStream.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(obj);

        isPrev = true;
        videoTV.pause();
        videoTV.el().style.display = "none";
        navStream.style.display = "none";
        adContainer.style.display = "flex";

        setTimeout(() => {
          adClose.style.display = "block";
        }, closeCount);
      });
      prevListener = true;
    }

    if (!nextListener) {
      nextStream.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(obj);

        isPrev = false;
        videoTV.pause();
        videoTV.el().style.display = "none";
        navStream.style.display = "none";
        adContainer.style.display = "flex";

        setTimeout(() => {
          adClose.style.display = "block";
        }, closeCount);
      });
      nextListener = true;
    }

    if (!adCloseLisener) {
      adClose.addEventListener("click", () => {
        if (isPrev) {
          chrome.runtime.sendMessage({
            tag: "prev",
            id: parseInt(obj.id - 1),
            isAd: obj.isAd,
          });
        } else {
          console.log(obj);
          chrome.runtime.sendMessage({
            tag: "next",
            id: obj.id,
            isAd: obj.isAd,
          });
        }

        console.log(obj);
        disableUI();
      });
      adCloseLisener = true;
    }

    videoTV.on("ended", () => {
      obj.isAd = !obj.isAd;
      chrome.runtime.sendMessage({
        tag: "next",
        id: obj.id,
        isAd: obj.isAd,
      });
    });

    videoTV.on("error", () => {
      const error = videoTV.error();
      console.log(error.message);

      setTimeout(() => {
        chrome.runtime.sendMessage({
          tag: "prev",
          id: parseInt(obj.id - 1),
          isAd: obj.isAd,
        });
      }, closeCount);
    });

    if (isHLS(obj.url)) {
      videoTV.src({ src: obj.url, type: "application/x-mpegURL" });
      videoTV.play();
      return;
    }

    videoTV.src({ src: obj.url, type: "video/mp4" });
    videoTV.play();
  }

  function disableUI() {
    prevStream.style.pointerEvents = "none";
    prevStream.style.opacity = "0.5";
    prevStream.style.cursor = "not-allowed";
    nextStream.style.pointerEvents = "none";
    nextStream.style.opacity = "0.5";
    nextStream.style.cursor = "not-allowed";
  }

  function enableUI() {
    prevStream.style.pointerEvents = "auto";
    prevStream.style.opacity = "1";
    prevStream.style.cursor = "pointer";
    nextStream.style.pointerEvents = "auto";
    nextStream.style.opacity = "1";
    nextStream.style.cursor = "pointer";

    videoTV.el().style.display = "block";
    navStream.style.display = "block";
    adContainer.style.display = "none";
    adClose.style.display = "none";
  }
});
