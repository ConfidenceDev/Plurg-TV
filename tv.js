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
  let tvObj = null;
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
      if (obj.tag === "tv") {
        tvObj = obj;
        loadTV(obj);
      }
      sendResponse({ success: true });
    });
    window.hasListener = true;
  }

  function loadTV() {
    enableUI();
    const isHLS = (url) => {
      return url && url.endsWith(".m3u8");
    };

    if (!prevListener) {
      prevStream.addEventListener("click", (e) => {
        e.preventDefault();
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
            id: parseInt(tvObj.id - 1),
            isAd: tvObj.isAd,
          });
        } else {
          chrome.runtime.sendMessage({
            tag: "next",
            id: tvObj.id,
            isAd: tvObj.isAd,
          });
        }

        disableUI();
      });
      adCloseLisener = true;
    }

    videoTV.on("ended", () => {
      tvObj.isAd = !tvObj.isAd;
      chrome.runtime.sendMessage({
        tag: "next",
        id: tvObj.id,
        isAd: tvObj.isAd,
      });
    });

    videoTV.on("error", () => {
      const error = videoTV.error();
      console.log(error.message);

      setTimeout(() => {
        chrome.runtime.sendMessage({
          tag: "prev",
          id: parseInt(tvObj.id - 1),
          isAd: tvObj.isAd,
        });
      }, closeCount);
    });

    if (isHLS(tvObj.url)) {
      videoTV.src({ src: tvObj.url, type: "application/x-mpegURL" });
      videoTV.play();
      return;
    }

    videoTV.src({ src: tvObj.url, type: "video/mp4" });
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
