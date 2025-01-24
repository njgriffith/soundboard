function playSound(event){
    const audioPlayer = document.getElementById('audio');
    try{
        const soundName = event.parentNode.querySelector('label').innerText;
        audioPlayer.src = `/sounds/${soundName}.mp3`;
        audioPlayer.play();
        event.classList.toggle('selected');
    }
    catch (error){
        console.error(error);
    }
}
document.getElementById('audio').addEventListener('ended', (event) => {
    document.querySelector('.selected').classList.toggle('selected');
});