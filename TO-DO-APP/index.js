let app = document.getElementById("app");
let todoForm = document.getElementById("todo-form");
let todoItemList = document.getElementById("todo-item-list");
let doneTaskList = document.getElementById("todo-done-list");

const headinMapping = {
  pending: "Pending Tasks",
  done: "Completed Tasks",
  delete: "Deleted Tasks"
};

todoForm.onsubmit = addToDoItem;

todoItemList.addEventListener("click", function(e) {
  const itemId = e.target.parentElement.parentElement.id;
  let clickedIndex = null;
  let item = taskList["pending"].filter((todoItem, index) => {
    clickedIndex = index;
    return todoItem.id == itemId;
  });
  taskList["pending"].splice(clickedIndex, 1);

  e.target.innerText === "delete" && taskList["delete"].push(item[0]);
  e.target.innerText === "done" && taskList["done"].push(item[0]);
  renderList();
});

function addToDoItem(e) {
  if (!e.target[0].value) {
    return;
  } else {
    taskList.pending.push({
      id: new Date().getTime(),
      title: e.target[0].value
    });
    e.preventDefault();
    renderList();
    todoForm.reset();
  }
}
function renderList() {
  todoItemList.innerHTML = "";
  let fragment = document.createDocumentFragment();
  Object.keys(taskList).forEach(element => {
    taskList[element].forEach(todoItem => {
      let div = document.createElement("div");
      div.classList.add("todo-item");
      div.classList.add(`headinMapping[element]`);
      div.setAttribute("id", todoItem.id);

      let taskNameBlock = document.createElement("div");
      let titleTextNode = document.createElement("p");
      console.log("element", element);
      if (element === "done") {
        titleTextNode = document.createElement("del");
      }
      let tNode = document.createTextNode(todoItem.title);
      titleTextNode.appendChild(tNode);

      taskNameBlock.appendChild(titleTextNode);

      let taskActionIconsBlock = document.createElement("div");
      taskActionIconsBlock.classList.add("icon-block");

      let deleteTaskBlock = document.createElement("div");
      let deleteIconNode = document.createTextNode("delete");
      deleteTaskBlock.appendChild(deleteIconNode);

      let doneTaskBlock = document.createElement("div");
      let doneIconNode = document.createTextNode("done");
      doneTaskBlock.appendChild(doneIconNode);

      taskActionIconsBlock.appendChild(deleteTaskBlock);
      taskActionIconsBlock.appendChild(doneTaskBlock);

      div.appendChild(taskNameBlock);
      div.appendChild(taskActionIconsBlock);
      fragment.appendChild(div);
    });
    todoItemList.append(fragment);
  });
}
const priorityMapping = {
  critical: 1,
  highest: 2,
  high: 3,
  averge: 4
};

function taskConstruct(data) {
  this.id = data.id;
  this.title = data.title || "No title";
  this.priority = data.priority || 4;
  this.isReopened = data.isReopened || false;
}
let taskList = {
  pending: [],
  done: [],
  deleted: []
};
