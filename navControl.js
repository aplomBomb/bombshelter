function closeNavLeft() {
    document.getElementById("twitchIconClose").style.transitionDelay = "0s";
    document.getElementById("twitchIconClose").style.transform = "scale(1, 1)";
    document.getElementById("twitchIconClose").style.left = "-10vw";
    document.getElementById("twitchIcon").style.transform = "rotate(-360deg)";
    document.getElementById("twitchBladeOpen").style.width ="0vw";
    
}
function openNavLeft() {
    document.getElementById("twitchIcon").style.transform = "rotate(360deg)";
    document.getElementById("youtubeBladeOpen").style.width ="0vw";
    document.getElementById("youtubeIconClose").style.transitionDelay = "0s";
    document.getElementById("youtubeIconClose").style.right = "-12em";
    document.getElementById("twitchBladeOpen").style.position = "fixed";
    document.getElementById("twitchBladeOpen").style.left = "0";
    document.getElementById("twitchBladeOpen").style.width = "85vw";
    document.getElementById("twitchIconClose").style.transitionDelay =".5s";
    document.getElementById("twitchIconClose").style.transform = "scale(1.6, 1.6)";
    document.getElementById("twitchIconClose").style.left = "75vw";
}

function closeNavRight() {
    document.getElementById("youtubeIcon").style.transform = "rotate(360deg)";
    document.getElementById("youtubeIconClose").style.transitionDelay = "0s";
    document.getElementById("youtubeIconClose").style.transform = "scale(1, 1)"
    document.getElementById("youtubeIconClose").style.right = "-12em";
    document.getElementById("youtubeBladeOpen").style.width ="0vw";
}
function openNavRight() {
    document.getElementById("youtubeIcon").style.transform = "rotate(-360deg)";
    document.getElementById("twitchBladeOpen").style.width ="0vw";
    document.getElementById("twitchIconClose").style.transitionDelay = "0s";
    document.getElementById("twitchIconClose").style.transform = "scale(1, 1)";
    document.getElementById("twitchIconClose").style.left = "-10vw";
    document.getElementById("youtubeBladeOpen").style.position = "fixed";
    document.getElementById("youtubeBladeOpen").style.right = "0";
    document.getElementById("youtubeBladeOpen").style.width ="85vw";
    document.getElementById("youtubeIconClose").style.transitionDelay = ".5s";   
    document.getElementById("youtubeIconClose").style.transform = "scale(1.4, 1.4)";   
    document.getElementById("youtubeIconClose").style.right = "75vw";     
}




