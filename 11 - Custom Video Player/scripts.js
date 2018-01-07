
// 1 grab all elements from the DOM
const player = document.querySelector('.player');

const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress_filled');

const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelector('.player__slider')

// 3 build all functions

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

function skip() {

  //video has currentTime attr
  //update that time by the data built into skip buttons
  video.currentTime += parseFloat(this.dataset.skip);

}

//this handles the volume and speeds
function handleRangeUpdate() {
  //this refers to range
  //dynamically handles both the volume and speed
  video[this.name] = this.value
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`
}


// 2 hook up event listeners
video.addEventListener('click', togglePlay);
//interesting!
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', handleProgress);

skipButtons.forEach((button) => {
  button.addEventListener('click', skip)
});

ranges.forEach((range) => {
  range.addEventListener('change', handleRangeUpdate)
});
//this updates in real time
ranges.forEach((range) => {
  range.addEventListener('mousemove', handleRangeUpdate)
});
