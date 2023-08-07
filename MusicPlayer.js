document.addEventListener('DOMContentLoaded', function() {
    var audioPlayer = document.getElementById('audioPlayer');
    var progressSlider = document.getElementById('progressSlider');
    var playBtn = document.getElementById('playBtn');
    var pauseBtn = document.getElementById('pauseBtn');
    var stopBtn = document.getElementById('stopBtn');
    var menuButton=document.getElementById("menu-button");
    var songsList=document.getElementById("songs-list");
    
    
    audioPlayer.addEventListener('loadedmetadata', function() {
      progressSlider.max = audioPlayer.duration;
    });
    
    audioPlayer.addEventListener('timeupdate', function() {
      progressSlider.value = audioPlayer.currentTime;
    });
    
    progressSlider.addEventListener('input', function() {
      audioPlayer.currentTime = progressSlider.value;
    });
  playBtn.addEventListener('click', function() {
      audioPlayer.play();
    });
    
    pauseBtn.addEventListener('click', function() {
      audioPlayer.pause();
    });
    
    stopBtn.addEventListener('click', function() {
      audioPlayer.pause();
      audioPlayer.currentTime = 0;
    });
    menuButton.addEventListener("click", function() {
if (songsList.style.display === "none") {
  songsList.style.display = "block";
} else {
  songsList.style.display = "none";
}
});
});
