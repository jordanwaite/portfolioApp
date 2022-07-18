// Whenever the page scrolls
function anchor_visible() {
  // If the window is scrolled down (more than a 20px buffer)
  if(window.scrollY > 80){
    // Show your button
    document.getElementById("go-top-anchor").style.visibility = "visible";
  }else{
    // Otherwise, hide your button
    document.getElementById("go-top-anchor").style.visibility = "hidden";
  }
}

function hide_near_top() {
  location.href = "#top";
}