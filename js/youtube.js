var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var youtubeScriptTag = document.getElementsByTagName('script')[0];
youtubeScriptTag.parentNode.insertBefore(tag, youtubeScriptTag)

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'AQBh9soLSkI',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  //event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  /*if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }*/
}

function changeVideo(videoId) {
  player.stopVideo();
  player.cueVideoById(videoId);
}


function isPlaying () {
    return player.getPlayerState() == 1;
}

function playVideo() {
  if(!isPlaying()) {
    player.playVideo();
    if(player.isMuted()) {
      player.unMute();
    }
  }
}

function pauseVideo() {
  if(isPlaying()) {
    player.pauseVideo();
  }
}

function stopVideo() {
    player.stopVideo();
}

function toggleMute() {
  if(player.isMuted()) {
    player.unMute();
    return false;
  } else {
    player.mute();
    return true;
  }
}

function setVolume(volume) {
  player.setVolume(volume);
}