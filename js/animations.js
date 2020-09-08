var delay = 250;
var lastClick = 0;
document.getElementById("logo-img").addEventListener("mouseover", function(e) {
    addHomeClasses();
});

document.getElementById("logo-img").addEventListener("mouseout", function(e) {
    removeHomeClasses();
});

function addHomeClasses(){
    if (lastClick >= (Date.now() - delay))
        return;
    lastClick = Date.now();
    document.getElementById("logo-img").classList.add("iw-logo-animation");
    document.getElementById("logo-img").classList.remove("fade-in");
    document.getElementById("home-text").classList.add("home-text-animation");
    document.getElementById("home-bg").classList.add("home-bg-blur");
}

function removeHomeClasses(){
    if (lastClick >= (Date.now() - delay))
        return;
    lastClick = Date.now();
    document.getElementById("logo-img").classList.remove("iw-logo-animation");
    document.getElementById("home-text").classList.remove("home-text-animation");
    document.getElementById("home-bg").classList.remove("home-bg-blur");
}