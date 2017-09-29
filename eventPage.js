chrome.browserAction.onClicked.addListener(() => {
    if(isPlaying()) {
        pauseVideo();
    } else {
        playVideo();
    }
    
    
});