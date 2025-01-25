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
const soundSearch = document.getElementById('sound-search');
soundSearch.addEventListener('input', (event) => {
    const soundItems = document.querySelectorAll('.sound-item');
    const query = soundSearch.value.toLowerCase();
    soundItems.forEach(soundItem => {
        if (soundItem.querySelector('label').innerText.toLowerCase().includes(query)){
            soundItem.style.display = 'flex';
            return;
        }
        soundItem.style.display = 'none';
    });
});