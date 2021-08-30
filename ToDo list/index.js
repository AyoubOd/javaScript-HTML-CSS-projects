//variables of container bar
let input = document.querySelector(".input-add"),
  addButton = document.querySelector(".add-button");

//todo container variables
let toDoContainer = document.querySelector(".todo-container");

let addedTask = document.createElement("div");
addedTask.classList.add("todo-content", "added-task");

let delButton = document.createElement("span");

delButton.classList.add("del-button");
delButton.textContent = "Delete";

//tasks info variables
let tasksInfo = document.querySelector(".tasks-info");
let tasks = document.querySelector(".tasks-num");
let completedTasks = document.querySelector(".completed");

//global variables
let tasksNum = 0,
  completed = 0;

//functions start
function addTask() {
  if (input.value === "") {
    alert("you can not add an empty task!");
  } else {
    toDoContainer.remove();
    //initialization of added task
    addedTask.textContent = input.value;
    addedTask.appendChild(delButton);
    ContainerTask();
  }
}
let deleteButtons = "nothing";
function ContainerTask() {
  newToDoContainer = toDoContainer.cloneNode(false);
  newAddedTask = addedTask.cloneNode(true);
  newToDoContainer.appendChild(newAddedTask);
  document.body.insertBefore(newToDoContainer, tasksInfo);

  input.value = "";
  tasksNum++;
  tasks.textContent = tasksNum;
  let allAddedTasks = Array.from(document.querySelectorAll(".added-task"));
  addButton.classList.toggle("rotation");
  for (let i = 0; i < allAddedTasks.length; i++) {
    allAddedTasks[i].onclick = function () {
      this.classList.toggle("finished");
      if (this.classList.contains("finished")) {
        completed++;
      } else {
        completed--;
      }
      completedTasks.textContent = completed;
    };
  }

  //delete button section
  deleteButtons = Array.from(document.querySelectorAll(".del-button"));
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = function () {
      this.parentElement.parentElement.remove();
      tasksNum--;
      tasks.textContent = tasksNum;
      if (document.body.children.length === 3) {
        document.body.insertBefore(toDoContainer, tasksInfo);
      }
    };
  }
}

//functions end
//start main code
addButton.addEventListener("click", addTask);

// for (let i = 0; i < deleteButtons.length; i++) {
// }
