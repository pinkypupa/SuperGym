const videoWrapper = document.querySelector('[data-iframe="video-container"]');
const videoPlayer = document.querySelector('[data-iframe="poster"]');
const playButton = document.querySelector('[data-iframe="play-button"]');


function createIframe() {
  videoPlayer.remove();
  playButton.remove();
  const iframePlayer = document.createElement('iframe');
  iframePlayer.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?si=twR-ewfRYAOdjvuk?&autoplay=1');
  iframePlayer.setAttribute('title', 'videoPlayer');
  iframePlayer.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
  iframePlayer.setAttribute('frameborder', '0');
  iframePlayer.setAttribute('allowfullscreen', '');
  iframePlayer.setAttribute('width', '364');
  iframePlayer.setAttribute('height', '228');
  videoWrapper.append(iframePlayer);
}

const playVideo = () => {
  playButton.addEventListener('click', (event) => {
    event.preventDefault();
    createIframe();
  });
};

export {playVideo};
