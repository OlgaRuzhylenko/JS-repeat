"use strict";
// var uniqueInOrder=function(iterable){
//     console.log([...iterable]);
//     return [...iterable].filter((a, i) => a !== iterable[i-1])
// }

// const result = uniqueInOrder("AAAABBBCCDAABBB");
// console.log(result);
// =================================================
  const tasks = [
    { id: 1, task: "Закінчити проект", completed: false },
    { id: 2, task: "Приготувати обід", completed: true },
    { id: 3, task: "Вивчити JavaScript", completed: false },
    { id: 4, task: "Погуляти на свіжому повітрі", completed: true },
  ];
const list = document.querySelector('.js-list'); 
 const common = {
  KEY_TASKS: 'taskStyle',
};

function taskMarcup(arr) {
    const markup = arr.map(({id, task, completed }) => 
        ` <li class="js-item" data-id="${id}">
      <p class="js-task">${task}</p>
      <li class="js-btn">
        <button class="js-done">Done</button>
        <button class="js-close">Close</button>
      </li>
    </li>`).join('');
        
   list.innerHTML = markup
}
taskMarcup(tasks);

list.addEventListener('click', onListClick);

function onListClick(evt) {
  // console.log(evt.target);
  if (evt.target.classList.contains('js-done')) {
    const { id } = evt.target.closest('.js-item').dataset;
    const taskElement = evt.target.closest('.js-item').querySelector('.js-task');
    const task = findTask(Number(id));
    
    const taskStyle = taskElement.classList.toggle('completed');
    localStorage.setItem(common.KEY_TASKS, JSON.stringify(taskStyle))
  }

  if (evt.target.classList.contains('js-close')) {
    const { id } = evt.target.closest('.js-item').dataset;
    const taskItem = document.querySelector('.js-item');

    taskItem.remove();
  }
}

function findTask(taskId) {
return tasks.find(({ id })=> id === taskId)
}