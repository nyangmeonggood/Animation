let target = document.querySelector("#dynamic");

function randomString() {
  let propsArr = ["Learn to "],
    propsString = propsArr[0].split("");

  let stringArr = ["HTML", "CSS", "JAVASCRIPT", "WEB ANIMATION", "REACT"],
    selectString = stringArr[
      Math.floor(Math.random() * stringArr.length)
    ].split("");

  return (stringMotionArr = propsString.concat(selectString));
}

function dynamic(targetString) {
  if (targetString.length > 0) {
    target.textContent += targetString.shift();
    setTimeout(function () {
      dynamic(targetString);
    }, 80);
  } else if (targetString.length === 0) {
    setTimeout(function () {
      target.textContent = "";
      dynamic(randomString());
    }, 3000);
  }
}

function blink() {
  target.classList.toggle("active");
}

init();
function init() {
  setInterval(blink, 500);
  dynamic(randomString());
}
