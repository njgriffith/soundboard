const audioPlayer = document.getElementById('audio');
function playSound(event){
    const soundName = event.parentNode.querySelector('label').innerText;
    audioPlayer.src = `/sounds/${soundName}.mp3`;
    audioPlayer.play();
}