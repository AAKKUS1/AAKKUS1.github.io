const songs = [
  "songs/FamousDexJapans.mp3",
  "songs/song2.mp3",
  "songs/song3.mp3"
];

let currentSongIndex = 0;

const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("play-pause");
const nextBtn = document.getElementById("next");
const volumeSlider = document.getElementById("volume");
const songTitle = document.getElementById("song-title");

function loadSong(index) {
  audio.src = songs[index];
  const songName = songs[index].split("/").pop();
  songTitle.textContent = songName;
  audio.load();
}

function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = "⏸️";
  } else {
    audio.pause();
    playPauseBtn.textContent = "▶️";
  }
}

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  audio.play();
  playPauseBtn.textContent = "⏸️";
}

volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value;
});

playPauseBtn.addEventListener("click", togglePlayPause);
nextBtn.addEventListener("click", nextSong);

audio.addEventListener("ended", nextSong);

loadSong(currentSongIndex);
