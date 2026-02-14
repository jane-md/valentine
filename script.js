// BURGER MENU SLIDE
const burger = document.getElementById('burger');
const sidebar = document.getElementById('sidebar');

burger.addEventListener('click', () => {
  sidebar.classList.toggle('show');
});

// PAGE NAVIGATION
const pages = ['home', 'scrapbook', 'message', 'surprise'];

document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.dataset.page;
    
    // hide all sections
    pages.forEach(page => {
      document.getElementById(page).classList.add('hidden');
    });

    // show selected page
    document.getElementById(target).classList.remove('hidden');

    // close sidebar
    sidebar.classList.remove('show');
  });
});

// SCRAPBOOK ENVELOPE
function openEnvelope() {
  document.getElementById('qr-container').classList.remove('hidden');
}

function openScrapbook() {
  document.getElementById('envelope-view').classList.add('hidden');
  document.getElementById('qr-view').classList.remove('hidden');
}
// SURPRISE MODAL
function showSurpriseModal() {
  document.getElementById('surprise-modal').style.display = 'flex';
}

function closeSurpriseModal() {
  document.getElementById('surprise-modal').style.display = 'none';
}

const audio = document.getElementById('audio');
const playBtn = document.getElementById('play-btn');
const progressBar = document.getElementById('progress-bar');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');

let isPlaying = false;

// Play / Pause toggle
playBtn.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
  } else {
    audio.play();
  }
});

// Update play button class
audio.addEventListener('play', () => {
  isPlaying = true;
  playBtn.classList.add('pause');
});

audio.addEventListener('pause', () => {
  isPlaying = false;
  playBtn.classList.remove('pause');
});

// Update progress bar
audio.addEventListener('timeupdate', () => {
  const progressPercent = (audio.currentTime / audio.duration) * 100;
  progressBar.value = progressPercent;

  let minutes = Math.floor(audio.currentTime / 60);
  let seconds = Math.floor(audio.currentTime % 60);
  if (seconds < 10) seconds = '0' + seconds;
  currentTimeEl.textContent = `${minutes}:${seconds}`;
});

// Update duration
audio.addEventListener('loadedmetadata', () => {
  let minutes = Math.floor(audio.duration / 60);
  let seconds = Math.floor(audio.duration % 60);
  if (seconds < 10) seconds = '0' + seconds;
  durationEl.textContent = `${minutes}:${seconds}`;
});

// Seek audio
progressBar.addEventListener('input', () => {
  audio.currentTime = (progressBar.value / 100) * audio.duration;
});
