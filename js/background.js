chrome.runtime.onMessage.addListener((message, sender, response) => {
    console.log(message);

    if(message === "Play") {
        playVideo();
    }

    if(message === "Pause") {
        pauseVideo();
    }

    if(message === "Stop") {
        stopVideo();
    }

    if(message === "Mute") {
        let isMuted = toggleMute();
        if(isMuted) {

        } else {
            
        }
    }

    if(message.volume) {
        setVolume(message.volume);
    }

    if(message.videoId) {
        let vidId = "";
        switch(message.videoId) {
            case "chillhop": vidId = "AQBh9soLSkI"; break;
            case "chillhop-cafe": vidId = "fYRyhRD_SAQ"; break;
            case "mellowbeat": vidId = "dovudiWfzMU"; break;
            case "lophee": vidId = "NvpacSBbHyc"; break;
            default: break;
        }

        if(vidId) {
            changeVideo(vidId);
        }
    }
});