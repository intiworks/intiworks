//Change navbar opacity on scroll
let last_known_scroll_position = 0;
let ticking = false;
let finishPos = 150;
let navBar = document.getElementById('sideNav');
let navBarPrevOpacity = navBar.style.opacity;
let navBarPrevFilter  = navBar.style.filter;

navBar.onmouseover = function() 
{
    navBarPrevOpacity = navBar.style.opacity;
    navBarPrevFilter  = navBar.style.filter;
    navBar.style.opacity = 1;
    navBar.style.filter = 'unset';
}
navBar.onmouseout = function() 
{
    navBar.style.opacity = navBarPrevOpacity;
    navBar.style.filter = navBarPrevFilter;
}

function showHideNavbar(){
	navBar.style.display = "flex";
}

function changeOpacity(scroll_pos) {
    let percent = scroll_pos/finishPos;
    let x = window.innerWidth;
    if(992 < x){
      if(percent < 0.15) {
        navBar.style.opacity = 0;
        navBar.style.filter = 'blur('+ '1' +'px)';
        document.getElementById("logo-img").classList.remove("iw-logo-animation");
        document.getElementById("home-text").classList.remove("home-text-animation");
        document.getElementById("home-bg").classList.remove("home-bg-blur");
      }
      else if(percent*1.3 < 0.90) {
        navBar.style.opacity = percent*1.3;
        navBar.style.filter = 'blur('+ '0' +'px)';
      }else{
    	document.getElementById("logo-img").classList.add("iw-logo-animation");
    	document.getElementById("logo-img").classList.remove("fade-in");
      document.getElementById("home-text").classList.add("home-text-animation");
      document.getElementById("home-bg").classList.add("home-bg-blur");
        navBar.style.opacity = 1;
        navBar.style.filter = 'blur('+ '0' +'px)';
      }
    }else{
      navBar.style.opacity = 1;
      navBar.style.filter = 'blur('+ '0' +'px)';
    }
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      changeOpacity(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});