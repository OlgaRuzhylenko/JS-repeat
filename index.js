"use strict";

const tasks = [];
const listElem = document.querySelector(".js-list");
const formElem = document.querySelector(".js-form-container");

formElem.addEventListener("submit", onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  // console.log(evt.target.elements);
  const item = {
    id: evt.target.elements.id.value,
    task: evt.target.elements.task.value,
    status: evt.target.elements.status.value,
  };
  console.log(item);

  const markup = templateTask(item);
  listElem.insertAdjacentHTML("beforeend", markup);

  tasks.push(item)
}

function templateTask(item) {
  return `
 <li class="js-item " data-id="${item.id}">
      <p class="js-task completed">${item.task}</p>
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

// const list = document.querySelector('.js-list');
// const keyTasksStyle = 'task status'

// function taskMarcup(arr) {
//     const markup = arr.map(({id, task, completed }) =>
//         ` <li class="js-item " data-id="${id}">
//       <p class="js-task ${completed ? 'completed' : ''}">${task}</p>
//       <li class="js-btn">
//         <button class="js-done">Done</button>
//         <button class="js-close">Close</button>
//       </li>
//     </li>`).join('');

//    list.innerHTML = markup
// }
// taskMarcup(tasks);

// list.addEventListener('click', onListClick);

// function onListClick(evt) {
//   if (evt.target.classList.contains('js-done')) {
//     const { id } = evt.target.closest('.js-item').dataset;
//     const taskElement = evt.target.closest('.js-item').querySelector('.js-task');
//     const task = findTask(Number(id));
//     task.completed = !task.completed;
//     const completed = taskElement.classList.toggle('completed');

//     localStorage.setItem(keyTasksStyle, JSON.stringify(tasks))
//   }

//   if (evt.target.classList.contains('js-close')) {
//     const { id } = evt.target.closest('.js-item').dataset;
//     const taskItem = document.querySelector('.js-item');

//     taskItem.remove();
//   }
// }

// function findTask(taskId) {
// return tasks.find(({ id })=> id === taskId)
// }
