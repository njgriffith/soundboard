function playSound(event){
    const audioPlayer = document.getElementById('audio');
    try{
        audioPlayer.src = `/sounds/${event.querySelector('label').innerText}.mp3`;
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