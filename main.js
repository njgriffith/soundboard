function playSound(event){
    const audioPlayer = document.getElementById('audio');
    try{
        audioPlayer.src = `/sounds/${event}`;
        audioPlayer.play();
    }
    catch (error){
        console.error(error);
    }
}