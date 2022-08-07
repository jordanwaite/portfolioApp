// Whenever the page scrolls
function anchor_visible() {
  // If the window is scrolled down
  if(window.scrollY > 80){
    // Show button
    document.getElementById("go-top-anchor").style.visibility = "visible";
  }else{
    // Otherwise, hide button
    document.getElementById("go-top-anchor").style.visibility = "hidden";
  }
}

function hide_near_top() {
  location.href = "#top";
}