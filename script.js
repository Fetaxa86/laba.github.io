const textElement = document.getElementById('clickable-text');
const sound = document.getElementById('sound');

textElement.addEventListener('click', () => {
    sound.currentTime = 0;
    sound.play();
});
