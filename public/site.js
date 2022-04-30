var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos || currentScrollPos == 0) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-76px";
  }
  prevScrollpos = currentScrollPos;

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("nav").style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2)";

} else {
    document.getElementById("nav").style.boxShadow = "none";
}
}