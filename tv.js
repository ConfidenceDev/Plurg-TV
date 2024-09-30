document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const channel = urlParams.get("channel");
  const title = urlParams.get("title");
  const timestamp = parseFloat(urlParams.get("timestamp")) || 0;
  const savedTimestamp = {
    channel: channel,
    title: title,
    timestamp: timestamp,
  };
  const videoTV = document.querySelector(".tv");
  const playPauseButton = document.querySelector(".playPause");
  const seekBar = document.querySelector(".seekBar");
  const muteUnmuteButton = document.querySelector(".muteUnmute");
  const spinner = document.querySelector(".spinner");

  chrome.runtime.onMessage.addListener((obj, sender, sendResponse) => {
    if (obj.tag === "loadTVStream") {
      loadTV(obj.id, obj.url, obj.interrupt);
      sendResponse({ success: true });
    }
  });

  function loadTV(id, streamUrl, interrupt) {
    const isHLS = (url) => {
      return url && url.endsWith(".m3u8");
    };

    const isMP4 = (url) => {
      return url && url.endsWith(".mp4");
    };

    function isTVPlaying(videoTV) {
      return !videoTV.paused && videoTV.currentTime > 0 && !video.ended;
    }

    if (isTVPlaying(videoTV) && !interrupt) return;

    if (isTVPlaying(videoTV)) {
      videoTV.pause();
      videoTV.currentTime = 0;
    }

    videoTV.removeAttribute("controls");
    videoTV.volume = 1;

    videoTV.addEventListener("contextmenu", (event) => {
      event.preventDefault();
    });

    playPauseButton.addEventListener("click", (e) => {
      e.preventDefault();
      if (videoTV.paused) {
        videoTV.play();
        playPauseButton.setAttribute("src", "./icons/pause.png");
      } else {
        videoTV.pause();
        playPauseButton.setAttribute("src", "./icons/play.png");
      }
    });

    // Seek
    videoTV.addEventListener("timeupdate", () => {
      seekBar.value = (videoTV.currentTime / videoTV.duration) * 100 || 0;
    });

    seekBar.addEventListener("input", () => {
      // Update current time
      videoTV.currentTime = (seekBar.value / 100) * videoTV.duration;
    });

    muteUnmuteButton.addEventListener("click", (e) => {
      e.preventDefault();
      videoTV.muted = !videoTV.muted;
      muteUnmuteButton.setAttribute(
        "src",
        `${videoTV.muted ? "./icons/unmute.png" : "./icons/mute.png"}`
      );
    });

    videoTV.addEventListener("play", () => {
      spinner.style.display = "none";
    });

    videoTV.addEventListener("pause", () => {
      spinner.style.display = "none";
    });

    videoTV.addEventListener("ended", () => {
      spinner.style.display = "block";
      chrome.runtime.sendMessage({ tag: "vidDone", id: id });
    });

    if (isHLS(streamUrl)) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(streamUrl);
        hls.attachMedia(videoTV);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          videoTV.play();
          videoTV.addEventListener("canplay", () => {
            spinner.style.display = "none";
          });
        });
      } else if (videoTV.canPlayType("application/vnd.apple.mpegurl")) {
        // Fallback for Safari browsers
        videoTV.src = streamUrl;
        videoTV.addEventListener("loadedmetadata", () => {
          spinner.style.display = "none";
          videoTV.play();
        });
      }
    } else {
      videoTV.src = streamUrl;
      videoTV.addEventListener("loadedmetadata", () => {
        spinner.style.display = "none";
        videoTV.play();
      });
    }
  }

  window.addEventListener("beforeunload", () => {
    if (!videoTV.ended) {
      chrome.storage.local.set({ videoTimestamp: videoTV.currentTime });
    } else {
      chrome.storage.local.remove("videoTimestamp");
    }
    chrome.storage.local.remove("tvId");
  });
});
