let btnToClick = document.querySelectorAll("li");

function changeColor() {
  document.body.className = "";
  document.body.classList.add(this.className);
}

for (let i = 0; i < btnToClick.length; i++) {
  btnToClick[i].addEventListener("click", changeColor);
}
