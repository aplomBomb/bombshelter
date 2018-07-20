// Function that handles the nav slide when the left slide close button is pressed//

function closeNavLeft() {
// enable scrolling of body when slide is retracted//
    document.getElementById("bod").className = "scroll";

    document.getElementById("twitchIconClose").style.transitionDelay = "0s";
    document.getElementById("twitchIconClose").style.transform = "scale(1, 1)";
    document.getElementById("twitchIconClose").style.left = "-50vw";
    document.getElementById("twitchIcon").style.transform = "rotate(-360deg)";
    document.getElementById("twitchBladeOpen").style.width ="0vw";
    
}

// Function that handles the nav slide when the left slide open button is pressed//
function openNavLeft() {
// disable scrolling of body when slide is out//
    document.getElementById("bod").className = "noscroll";   
    document.getElementById("twitchIcon").style.transform = "rotate(360deg)";

    // when left slide is opened make sure right slide closes//
    document.getElementById("youtubeBladeOpen").style.width ="0vw";
    document.getElementById("youtubeIconClose").style.transitionDelay = "0s";
    document.getElementById("youtubeIconClose").style.right = "-50em";

    document.getElementById("twitchBladeOpen").style.position = "fixed";
    document.getElementById("twitchBladeOpen").style.left = "0";
    document.getElementById("twitchBladeOpen").style.width = "100vw";
    document.getElementById("twitchIconClose").style.transitionDelay =".5s";
    document.getElementById("twitchIconClose").style.transform = "scale(1.6, 1.6)";
    document.getElementById("twitchIconClose").style.left = "90vw";
}

// Function that handles the nav slide when the right slide close button is pressed//
function closeNavRight() {
// enable scrolling of body when slide is retracted//
    document.getElementById("bod").className = "scroll";

    document.getElementById("youtubeIcon").style.transform = "rotate(360deg)";
    document.getElementById("youtubeIconClose").style.transitionDelay = "0s";
    document.getElementById("youtubeIconClose").style.transform = "scale(1, 1)"
    document.getElementById("youtubeIconClose").style.right = "-50em";
    document.getElementById("youtubeBladeOpen").style.width ="0vw";
}

// Function that handles the nav slide when the right slide open button is pressed//
function openNavRight() {
// disable scrolling of body when slide is out//
    document.getElementById("bod").className = "noscroll";

    document.getElementById("youtubeIcon").style.transform = "rotate(-360deg)";

    //when right slide opens make sure left slide closes//
    document.getElementById("twitchBladeOpen").style.width ="0vw";
    document.getElementById("twitchIconClose").style.transitionDelay = "0s";
    document.getElementById("twitchIconClose").style.transform = "scale(1, 1)";
    document.getElementById("twitchIconClose").style.left = "-50vw";

    document.getElementById("youtubeBladeOpen").style.position = "fixed";
    document.getElementById("youtubeBladeOpen").style.right = "0";
    document.getElementById("youtubeBladeOpen").style.width ="100vw";
    document.getElementById("youtubeIconClose").style.transitionDelay = ".5s";   
    document.getElementById("youtubeIconClose").style.transform = "scale(1.4, 1.4)";   
    document.getElementById("youtubeIconClose").style.right = "90vw";     
}
