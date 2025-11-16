const songs = [
  {
    src: "songs/FamousDexJapans.mp3",
    name: "Famous Dex - Japan",
  },
  {
    src: "songs/1oneam-vogue.mp3",
    name: "1oneam - Vogue",
  },
  {
    src: "songs/2024playboiCarti.mp3",
    name: "Playboi carti - 2024",
  },
  {
    src: "songs/Glokk40Spaz-IChooseViolence.mp3",
    name: "Glokk40Spaz - I Choose Violence",
  },
  {
    src: "songs/LUCKI-13.mp3",
    name: "LUCKI - 13",
  },
];

let currentSongIndex = 0;

const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("play-pause");
const nextBtn = document.getElementById("next");
const previousBtn = document.getElementById("previous");
const volumeSlider = document.getElementById("volume");
const songTitle = document.getElementById("song-title");

function loadSong(index) {
  const song = songs[index];
  audio.src = song.src;
  songTitle.textContent = song.name;
  audio.load();
}

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    playPauseBtn.innerHTML = '<i class="ri-pause-line"></i>';
  } else {
    audio.pause();
    playPauseBtn.innerHTML = '<i class="ri-arrow-right-s-fill"></i>';
  }
}

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  audio.play();
  playPauseBtn.innerHTML = '<i class="ri-pause-line"></i>';
}
function previousSong() {
  currentSongIndex = (currentSongIndex - 1) % songs.length;
  loadSong(currentSongIndex);
  audio.play();
  playPauseBtn.innerHTML = '<i class="ri-skip-left-fill"></i>';
}

volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value;
});

playPauseBtn.addEventListener("click", togglePlayPause);
nextBtn.addEventListener("click", nextSong);
previousBtn.addEventListener("click", previousSong);
audio.addEventListener("ended", nextSong);

loadSong(currentSongIndex);
