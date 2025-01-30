const textElement = document.getElementById('clickable-text');
const sound = document.getElementById('sound');

textElement.addEventListener('click', () => {
    sound.currentTime = 0;
    sound.play();
});

document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("background-music");
    document.addEventListener("click", function playAudio() {
        audio.play().catch(error => console.error("Ошибка воспроизведения: ", error));
        document.removeEventListener("click", playAudio);
    });
});

document.getElementById("mute-icon").addEventListener("click", function() {
    var music = document.getElementById("background-music");
    if (music.muted) {
        music.muted = false;
        this.src = "img/mute2.png";
    } else {
        music.muted = true;
        this.src = "img/unmute2.png";
    }
});

function showContent(id) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
}