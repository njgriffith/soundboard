function playSound(event, soundName){
    const audioPlayer = document.getElementById('audio');
    try{
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