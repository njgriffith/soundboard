
// FUCK YOU WE LOVE GLOBAL VARIABLES AND THE OGG FILE FORMAT!!!!!
const sounds = {
    1: {
        "file": "bruh.ogg"
    }, 
    2: {
        "file": "plug.ogg"
    },
    3: {
        "file": "gay.ogg"
    }
}

function playSound(event){
    const audioPlayer = document.getElementById('audio');
    let soundPath = `/sounds/${sounds[event]["file"]}`;
    try{
        audioPlayer.src = soundPath;
        audioPlayer.play();
    }
    catch (error){
        console.error(error);
        console.error(`"${soundPath}" was not found!`);
    }
}