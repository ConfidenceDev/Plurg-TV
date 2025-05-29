document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const videoTV = document.querySelector(".tv");
  const playPauseButton = document.querySelector(".playPause");
  const seekBar = document.querySelector(".seekBar");
  const muteUnmuteButton = document.querySelector(".muteUnmute");
  const spinner = document.querySelector(".spinner");
  const currentTime = document.querySelector(".currentTime");
  const duration = document.querySelector(".duration");

  chrome.runtime.onMessage.addListener((obj, sender, sendResponse) => {
    if (obj.tag === "loadTVStream") {
      loadTV(obj);
      sendResponse({ success: true });
    }
  });

  function loadTV(obj) {
    const isHLS = (url) => {
      return url && url.endsWith(".m3u8");
    };

    const isMP4 = (url) => {
      return url && url.endsWith(".mp4");
    };

    function isTVPlaying(videoTV) {
      return !videoTV.paused && videoTV.currentTime > 0 && !videoTV.ended;
    }

    if (!obj.reload) return;

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

    videoTV.addEventListener("timeupdate", () => {
      seekBar.value = (videoTV.currentTime / videoTV.duration) * 100 || 0;
      currentTime.textContent = formatTime(videoTV.currentTime);
    });

    seekBar.addEventListener("input", () => {
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
      chrome.runtime.sendMessage({
        tag: "vidDone",
        id: obj.id,
        isAd: obj.isAd,
      });
    });

    if (isHLS(obj.url)) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(obj.url);
        hls.attachMedia(videoTV);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          videoTV.addEventListener("loadedmetadata", () => {
            spinner.style.display = "none";
            duration.textContent = formatTime(videoTV.duration);
            videoTV.play();
            playPauseButton.setAttribute("src", "./icons/pause.png");
            muteUnmuteButton.setAttribute("src", "./icons/mute.png");
          });
        });
      } else if (videoTV.canPlayType("application/vnd.apple.mpegurl")) {
        // Fallback for Safari browsers
        videoTV.src = obj.url;
        videoTV.addEventListener("loadedmetadata", () => {
          spinner.style.display = "none";
          duration.textContent = formatTime(videoTV.duration);
          videoTV.play();
          playPauseButton.setAttribute("src", "./icons/pause.png");
          muteUnmuteButton.setAttribute("src", "./icons/mute.png");
        });
      }
    } else {
      videoTV.src = obj.url;
      videoTV.addEventListener("loadedmetadata", () => {
        spinner.style.display = "none";
        duration.textContent = formatTime(videoTV.duration);
        videoTV.play();
        playPauseButton.setAttribute("src", "./icons/pause.png");
        muteUnmuteButton.setAttribute("src", "./icons/mute.png");
      });
    }

    function formatTime(seconds) {
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins < 10 ? "0" + mins : mins}:${
        secs < 10 ? "0" + secs : secs
      }`;
    }
  }

  window.addEventListener("beforeunload", () => {
    if (!videoTV.paused || !videoTV.ended) videoTV.pause();
    chrome.storage.local.remove("tvId");
  });
});
