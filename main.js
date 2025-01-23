
function playSound(event){
    const audioPlayer = document.getElementById('audio');
    var soundName = '';
    try{
        soundName = event.parentNode.querySelector('label').innerText;
        audioPlayer.src = `/sounds/${soundName}.mp3`;
        audioPlayer.play();
    }
    catch (error){
        console.log(`${soundName} mp3 not found`);
    }
}