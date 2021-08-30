//start of variables===============================================

//current slider index
let currentSlider = 1;

//Slider number
let sliderNumber = document.getElementById("slider-number");

//slider Images
let sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);

//previous and next buttons
let prevButton = document.getElementById("previous"),
  nextButton = document.getElementById("next");

//indicators of slider images
let indicators = document.getElementById("indicators");

//end of variables==================================================

//start of pagination creation========================================

let paginationElement = document.createElement("ul");
paginationElement.setAttribute("id", "pagination-ul");

for (let i = 1; i <= sliderImages.length; i++) {
  //creation of list items
  let paginationItem = document.createElement("li");

  //assigning data index
  paginationItem.setAttribute("data-index", i);

  //adding content of list
  paginationItem.appendChild(document.createTextNode(i));

  //adding lists to ul
  paginationElement.appendChild(paginationItem);
}
//adding ul to indicators
indicators.appendChild(paginationElement);

let paginationBullets = document.querySelectorAll("#pagination-ul li");

for (let i = 0; i < paginationBullets.length; i++) {
  paginationBullets[i].onclick = function () {
    currentSlider = parseInt(this.getAttribute("data-index"));
    clickCheck();
  };
}

//end of pagination creation===========================================

//start of next and prev functions=====================================

function prevFunction() {
  if (currentSlider > 1) {
    currentSlider--;
    clickCheck();
  }
}

function nextFunction() {
  if (currentSlider < 4) {
    currentSlider++;
    clickCheck();
  }
}
//removing all active class
function clickCheck() {
  removeActives();
  //setting content of slider number
  sliderNumber.textContent =
    "Slide #" + currentSlider + " of " + sliderImages.length;

  //setting the current slider
  sliderImages[currentSlider - 1].classList.add("active");

  //setting the active list item
  paginationElement.children[currentSlider - 1].classList.add("active");

  //checking if the slide is the last
  if (currentSlider == sliderImages.length) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
  //checking if it is thefirst slide
  if (currentSlider == 1) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }
}

function removeActives() {
  //removing the active class from siblings images and list
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].classList.remove("active");
    paginationElement.children[i].classList.remove("active");
  }
}

//end of next and prev functions=======================================
//start of main program

clickCheck();
prevButton.onclick = prevFunction;
nextButton.onclick = nextFunction;

//end of main program
