const inputTodo = document.getElementById("inputTodo");
const addTodoBtn = document.getElementById("addTodoBtn");
const addElement = document.getElementById("add-element");
const displayTodo = document.getElementById("display-todo-container");
const clearButton = document.getElementById("clean");
const allButton = document.getElementById("all");
const incompleteButton = document.getElementById("active");
const completedButton = document.getElementById("complete");
const clearCompletedButton = document.getElementById("clear-complete");

addTodoBtn.addEventListener("click", run);
let added;
var todoArr = [];
function display(added) {
  displayTodo.appendChild(added);
}
function run() {
  let inputTodoValue = inputTodo.value.trim();

  if (inputTodoValue == "") {
    alert("Field cannot be empty!");
  } else {
    const obj = {
      value: "",
      id: Date.now(),
      completed: false,
    };
    obj.value = inputTodoValue;
    todoArr.push(obj);
    todoArr.forEach((i) => {
      added = document.createElement("div");
      added.setAttribute("class", "todo-allowed added");
      added.setAttribute("data-id", `${i.id}`);
      added.innerHTML = `<span id=${i.id} class="todo-span">${i.value}</span>
        <button class="tick" id="check">
        <i class="fas fa-solid fa-check"></i>
      </button>
      <button class="trash" id="trash">
        <i class="fas fa-solid fa-trash"></i>
      </button>`;

      // console.log(i);
      // console.log(added);
    });
    inputTodo.value = "";
    display(added);

    let check1 = document.querySelectorAll(".tick");
    for (let i = 0; i < check1.length; i++) {
      check1[i].onclick = function () {
        console.log(this.parentNode.firstElementChild);
        this.parentNode.firstElementChild.classList.add('strike');
        this.parentNode.classList.add("completed");
        let id = this.parentNode.firstElementChild.id;
        let index= todoArr.findIndex((item)=>Number(item.id) === Number(id))
        todoArr[index].completed = true;
        console.log(todoArr);
      };
    }

    let trash1 = document.querySelectorAll(".trash");
    for (let i = 0; i < trash1.length; i++) {
      trash1[i].onclick = function () {
        console.log(this.parentNode.firstElementChild.id);
        index = todoArr.findIndex(
          (item) => item.id == this.parentNode.firstElementChild.id
        );
        todoArr.splice(index, 1);
        this.parentNode.remove();
        console.log(todoArr);
      };
    }

    allButton.addEventListener("click", () => {
      let todo = document.querySelectorAll(".added");
      for (let i = 0; i < todo.length; i++) {
        todo[i].style.display = "flex";
      }
      console.log(todoArr);
    });

    incompleteButton.onclick = () => {
      let todo = document.querySelectorAll(".added");
      for (let i = 0; i < todo.length; i++) {
        if (todoArr[i].completed == true) {
          todo[i].style.display = "none";
        } else {
          todo[i].style.display = "flex";
        }
      }
      console.log(todoArr);
    };

    completedButton.onclick= () => {
      let todo = document.querySelectorAll(".added");
      for (let i = 0; i < todo.length; i++) {
        if (todoArr[i].completed == true) {
          todo[i].style.display = "flex";
        } else {
          todo[i].style.display = "none";
        }
      }
      console.log(todoArr);
    };

    clearCompletedButton.onclick= () => {
      let todo = document.querySelectorAll(".added");
      console.log(todo);
      for (let i = 0; i < todo.length; i++) {
        
        if (todo[i].classList.contains("completed") == true) {
          let id = todo[i].dataset.id;
          todo[i].remove();
        let index= todoArr.findIndex(item=>Number(item.id)==Number(id));
        console.log(index);
          
          todoArr.splice(index, 1);
        }
      }
      console.log(todoArr);
      console.log(todo);
    };

    clearButton.onclick = () => {
      let todo = document.querySelectorAll(".added");
      for (let i = 0; i < todo.length; i++) {
        todo[i].remove();
      }
      todoArr=[];
      console.log(todoArr);
    };
  }
}

inputTodo.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    run();
  }
});
