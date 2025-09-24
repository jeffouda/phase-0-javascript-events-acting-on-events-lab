// Your code here
const dodger = document.getElementById("dodger");

// function to move left
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

// function to move right
function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left < 360) {
    // game width is 400px, dodger is 40px
    dodger.style.left = `${left + 1}px`;
  }
}
