// Referenced mobile navigation bar code from:
// https://www.w3schools.com/howto/howto_js_mobile_navbar.asp
  function toggleMenu() {
  var x = document.getElementById("nav-links");
  if (x.style.display === "flex") {
  x.style.display = "none";
} else {
  x.style.display = "flex";
}
}