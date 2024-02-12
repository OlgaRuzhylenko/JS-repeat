"use strict";

const tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
const listElem = document.querySelector(".js-list");
const formElem = document.querySelector(".js-form-container");
const statusSelect = document.getElementById("status");

formElem.addEventListener("submit", onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  const item = {
    id: evt.target.elements.id.value,
    task: evt.target.elements.task.value,
  };

  const markup = templateTask(item);
  listElem.insertAdjacentHTML("beforeend", markup);

  tasks.push(item);

  evt.target.elements.id.value = "";
  evt.target.elements.task.value = "";
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function templateTask(item) {
  return `
 <li class="js-item " data-id="${item.id}">
      <p class="js-task">${item.task}</p>
      <li class="js-btn">
        <button class="js-done">Done</button>
        <button class="js-close">Close</button>
      </li>
    </li>
`;
}

function markupArr(arr) {
  return arr.map(templateTask).join("");
}

function renderArr(arr) {
  const markup = markupArr(arr);

  listElem.innerHTML = markup;
}

renderArr(tasks);

listElem.addEventListener("click", onListClick);

function onListClick(evt) {
  if (evt.target.classList.contains("js-done")) {
    const { id } = evt.target.closest(".js-item").dataset;
    const taskElement = evt.target.closest(".js-item").querySelector(".js-task");
    const task = findTask(Number(id));
    const completed = taskElement.classList.toggle("completed");
    task.completed = completed;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  if (evt.target.classList.contains("js-close")) {
    const { id } = evt.target.closest(".js-item").dataset;
    const taskItem = document.querySelector(".js-item");
    tasks.splice(
      tasks.findIndex((task) => task.id === parseInt(id)),
      1
    );
    taskItem.remove();
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}

function findTask(taskId) {
  return tasks.find(({ id }) => id === taskId);
}
