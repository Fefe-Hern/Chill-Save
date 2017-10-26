// TODO: When popup opens, check if video is playing and, if so, display which video it is in dropdown.
// TODO: Toggle mute / umute, and Play / Pause

document.getElementById("Play").addEventListener("click", send);
document.getElementById("Pause").addEventListener("click", send);
document.getElementById("Stop").addEventListener("click", send);
document.getElementById("Mute").addEventListener("click", send);

document.getElementById("Volume").addEventListener("change", setVolume);
document.getElementById("Volume").addEventListener("input", setVolume);

document.getElementById("Select").addEventListener("change", changeVideo);


function send(message) {
    chrome.runtime.sendMessage(this.innerHTML, (res) => {});
}

function setVolume() {
    chrome.runtime.sendMessage({
        volume: this.value
    }, (res) => {});
}

function changeVideo() {
    chrome.runtime.sendMessage({
        videoId: this.value
    }, (res) => {});
}