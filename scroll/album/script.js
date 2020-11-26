window.addEventListener("scroll", scrollGrid);

if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
  window.addEventListener("wheel", flatScroll);}

else if (/Edge/.test(navigator.userAgent)) {
  window.addEventListener("wheel", flatScroll);
}
else {
window.addEventListener("scroll", flatScroll); }

function scrollGrid() {
  let transY = window.pageYOffset,
  container = document.querySelector(".container");

  container.style.setProperty("--scroll", transY + "px");

}
scrollGrid();

function flatScroll(e) {
  this.scrollBy(0, e.deltaY);
  e.preventDefault();
}