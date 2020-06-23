import { createButtons } from './todoDom';

class Todo {
  constructor(title, description, date, priority, project, complete) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.project = project;
    this.complete = complete;
  }
}

let todos = JSON.parse(window.localStorage.getItem('todos'));

if (todos == null) {
  todos = [];
}

export const todoForm = () => {
  document.getElementById('id-todo-form').reset();
  const submit = document.getElementById('id-todo-form');

  submit.onsubmit = () => {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;
    const priority = document.getElementById('priority').value;
    const project = document.getElementById('project').value;
    const todo = new Todo(title, description, date, priority, project, false);

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));

    window.location.reload();
    return false;
  };
};

const editForm = (values, elt) => {
  const submit = document.getElementById('id-todo-form');
  const todoSubmit = document.getElementById('todo-submit');

  todoSubmit.textContent = 'Edit';

  submit.onsubmit = () => {
    values.splice(values.indexOf(elt), 1);
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;
    const priority = document.getElementById('priority').value;
    const project = document.getElementById('project').value;
    const todo = new Todo(title, description, date, priority, project, false);

    values.push(todo);
    localStorage.setItem('todos', JSON.stringify(values));
    window.location.reload();
    return false;
  };
};

export const todoShow = (projectName) => {
  const todoList = document.getElementById('todo-list');

  todoList.classList.remove('d-none');

  const values = JSON.parse(window.localStorage.getItem('todos'));

  if (values !== null) {
    todoList.querySelectorAll('*').forEach(n => n.remove());
    values.forEach((elt) => {
      if (elt.project === projectName) {
        createButtons(elt, values, todoList, projectName);
      }
    });
  }
};
