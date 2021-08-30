let tries = document.querySelector(".tries"),
  i = 0;
tries.innerHTML = "Wrong tries : " + i;

//start variables of splash-screen
let button = document.querySelector(".button");
//end variables of splash-screen

//start game block container variables
let gameBlocksContainer = document.querySelector(".game-blocks-container");
let gameBlocks = Array.from(gameBlocksContainer.children);

let orderRange = Array(gameBlocks.length)
  .fill(null)
  .map(function (item, index) {
    return index;
  });

//end game block container variables

//start var
let wrongTries = 0;
let duration = 1000;
//end var

//start functions

function StartGame() {
  let name = document.querySelector(".name ");
  nameElement = prompt("Enter your name");
  if (nameElement == "" || nameElement == null) {
    name.textContent = "Hello : Unknown";
  } else {
    name.textContent = "Hello : " + nameElement;
  }
  let splashScreen = document.querySelector(".splash-screen");
  splashScreen.remove();
}

function Shuffle(array) {
  let current = array.length,
    random,
    temp;
  for (let i = 0; i < current / 2; i++) {
    temp = array[i];
    random = Math.floor(Math.random() * current);
    array[i] = array[random];
    array[random] = temp;
  }
  return array;
}

function flipped() {
  this.classList.add("flipped");

  let allFlippedBlocks = gameBlocks.filter((block) =>
    block.classList.contains("flipped")
  );

  if (allFlippedBlocks.length === 2) {
    stopClicking();
  }
  matchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);
}

//stop clicking func
function stopClicking() {
  gameBlocksContainer.classList.add("no-clicking");

  setTimeout(
    () => gameBlocksContainer.classList.remove("no-clicking"),
    duration
  );
}

function matchedBlocks(block1, block2) {
  if (block1.dataset.technology === block2.dataset.technology) {
    block1.classList.remove("flipped");
    block2.classList.remove("flipped");

    block1.classList.add("has-match");
    block2.classList.add("has-match");

    document.getElementById("success").play();
  } else {
    tries.innerHTML = "Wrong tries : " + i++;
    document.getElementById("faillure").play();

    setTimeout(function () {
      block1.classList.remove("flipped");
      block2.classList.remove("flipped");
    }, duration);
  }
}

//end functions
//start main program_____________________________
button.onclick = StartGame;

//shuffling blocks by changing the order
Shuffle(orderRange);
//giving orders
gameBlocks.forEach((block, index) => {
  block.style.order = orderRange[index];
  block.onclick = flipped;
});

//end main program_______________________________
