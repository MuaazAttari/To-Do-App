const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

function addTask(event) {
  event.preventDefault();

  const taskText = todoInput.value.trim();
  if (taskText === '') return;

  const task = document.createElement('li');
  task.className = 'todo';

  const checkboxWrapper = document.createElement('label');
  checkboxWrapper.style.display = 'flex';
  checkboxWrapper.style.alignItems = 'center';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
// checkbox.addEventListener('click', congrats())


  const customCheckbox = document.createElement('span');
  customCheckbox.className = 'custom-checkbox';

  checkboxWrapper.appendChild(checkbox);
  checkboxWrapper.appendChild(customCheckbox);
  task.appendChild(checkboxWrapper);

  const taskTextElement = document.createElement('span');
  taskTextElement.className = 'todo-text';
  taskTextElement.textContent = taskText;
  task.appendChild(taskTextElement);

  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete-button';
  deleteButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="var(--accent-color)" viewBox="0 0 16 16">
      <path d="M5.5 5.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 .5-.5zM7 5.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 .5-.5zM9 5.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 .5-.5z"/>
      <path fill-rule="evenodd" d="M14 4.5V5h-1v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5H2v-.5a.5.5 0 0 1 .5-.5H5V3a2 2 0 1 1 4 0v1h2.5a.5.5 0 0 1 .5.5zM5.118 4 5 4.118V5h6V4.118L10.882 4H5.118zM6 3v1h4V3a1 1 0 0 0-2 0v1H6z"/>
    </svg>`;

  deleteButton.addEventListener('click', () => {
    task.remove();
  });


//   function congrats() {
//     alert('Congratulations you have completed a task!')
//   }
  task.appendChild(deleteButton);

  todoList.appendChild(task);

  todoInput.value = '';
}

addButton.addEventListener('click', addTask);
