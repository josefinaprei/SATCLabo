function toggleMusic() {
    const audio = document.getElementById("background-music");
    const button = document.getElementById("music-button");

    audio.volume = 0.1;
    
    if (audio.paused) {
        audio.play();
        button.textContent = "Pause";
    } else {
        audio.pause();
        button.textContent = "Play";
    }
}