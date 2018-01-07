
// grab all elements from the DOM
const player = document.querySelector('.player');

const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress_filled');

const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelector('[data-skip]');
const ranges = player.querySelector('.player__slider')

// build all functions

function togglePlay() {
  //paused is a property on video
  if(video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateButton() {
  //store in var from ernary operator
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
  console.log(this);
}

// hook up event listeners
video.addEventListener('click', togglePlay)
//interesting!
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)

toggle.addEventListener('click', togglePlay)
