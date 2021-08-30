//img container variables
let slides = Array.from(document.querySelectorAll(".img-container img"));

let slideInfo = document.querySelector(".slide-num");

//global variables
let current = 0;

//controls variables
let prevElement = document.querySelector(".previous"),
  nextElement = document.querySelector(".next");

let pointersElement = document.querySelectorAll(".pointers ul li");
let pointersArray = Array.from(pointersElement);

//functions start
function prevFunction() {
  if (current > 0) {
    slides.forEach((item) => item.classList.remove("active"));
    pointersArray.forEach((item) => item.classList.remove("active"));
    current--;
    slides[current].classList.add("active");
    pointersArray[current].classList.add("active");
    slideInfo.textContent = `slide #${current + 1} of  ${slides.length}`;
  }
  checkFunction();
}

function nextFunction() {
  if (current < slides.length) {
    slides.forEach((item) => item.classList.remove("active"));
    pointersArray.forEach((item) => item.classList.remove("active"));
    current++;
    slides[current].classList.add("active");
    pointersArray[current].classList.add("active");
    slideInfo.textContent = `slide #${current + 1} of  ${slides.length}`;
  }
  checkFunction();
}

function pointersClick() {
  current = pointersArray.indexOf(this);
  slides.forEach((item) => item.classList.remove("active"));
  pointersArray.forEach((item) => item.classList.remove("active"));
  slides[current].classList.add("active");
  pointersArray[current].classList.add("active");
  slideInfo.textContent = `slide #${current + 1} of  ${slides.length}`;
  checkFunction();
}

function checkFunction() {
  if (current == 0) {
    prevElement.classList.add("blocked");
  } else {
    prevElement.classList.remove("blocked");
  }
  if (current == 2) {
    nextElement.classList.add("blocked");
  } else {
    nextElement.classList.remove("blocked");
  }
}
//functions end
//main program

slideInfo.textContent = "slide #1 of " + slides.length;
checkFunction();
prevElement.onclick = prevFunction;
nextElement.onclick = nextFunction;

pointersArray.forEach((item) => (item.onclick = pointersClick));
