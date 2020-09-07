document.getElementById("logo-img").addEventListener("mouseover", function(e) {
    document.getElementById("logo-img").classList.add("iw-logo-animation");
    document.getElementById("logo-img").classList.remove("fade-in");
    document.getElementById("home-text").classList.add("home-text-animation");
});

document.getElementById("logo-img").addEventListener("mouseout", function(e) {
    document.getElementById("logo-img").classList.remove("iw-logo-animation");
    document.getElementById("home-text").classList.remove("home-text-animation");
});