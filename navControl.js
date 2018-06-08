function closeNavLeft() {
    document.getElementById("twitchIconClose").style.display = "none";
    document.getElementById("twitchBladeOpen").style.width ="0vw";
}
function openNavLeft() {
    document.getElementById("youtubeBladeOpen").style.width ="0vw";
    document.getElementById("twitchBladeOpen").style.position = "fixed";
    document.getElementById("twitchBladeOpen").style.left = "0";
    document.getElementById("twitchBladeOpen").style.width = "85vw";
    document.getElementById("twitchIconClose").style.position = "fixed";   
    document.getElementById("twitchIconClose").style.left = "-1em";
    document.getElementById("twitchIconClose").style.display = "block";    
}

function closeNavRight() {
    document.getElementById("youtubeIconClose").style.display = "none";
    document.getElementById("youtubeBladeOpen").style.width ="0vw";
}
function openNavRight() {
    document.getElementById("twitchBladeOpen").style.width ="0vw";
    document.getElementById("youtubeBladeOpen").style.position = "fixed";
    document.getElementById("youtubeBladeOpen").style.right = "0";
    document.getElementById("youtubeBladeOpen").style.width = "85vw";
    document.getElementById("youtubeIconClose").style.position = "fixed";   
    document.getElementById("youtubeIconClose").style.right = "-.75em";
    document.getElementById("youtubeIconClose").style.display = "block";     
}




