function closeNavLeft() {
    document.getElementById("twitchBladeOpen").style.width ="0vw";
}
function openNavLeft() {
    document.getElementById("youtubeBladeOpen").style.width ="0vw";
    document.getElementById("twitchBladeOpen").classList.remove("hidden");
    document.getElementById("twitchBladeOpen").style.position = "fixed";
    document.getElementById("twitchBladeOpen").style.left = "0";
    if (window.matchMedia("(max-width: 1800px)").matches) {
        document.getElementById("twitchBladeOpen").style.width = "85vw";
        /* the viewport is at most 1800 pixels wide */
      } else {
        document.getElementById("twitchBladeOpen").style.width = "100vw";
        /* the viewport is more than 1800 pixels wide */
      }
    
}

function closeNavRight() {
    document.getElementById("youtubeBladeOpen").style.width ="0vw";
}
function openNavRight() {
    document.getElementById("twitchBladeOpen").style.width ="0vw";
    document.getElementById("youtubeBladeOpen").classList.remove("hidden");
    document.getElementById("youtubeBladeOpen").style.position = "fixed";
    document.getElementById("youtubeBladeOpen").style.right = "0";
    if (window.matchMedia("(max-width: 1800px)").matches) {
        document.getElementById("youtubeBladeOpen").style.width = "85vw";
        /* the viewport is at most 1800 pixels wide */
      } else {
        document.getElementById("youtubeBladeOpen").style.width = "100vw";
        /* the viewport is more than 1800 pixels wide */
      }
}




