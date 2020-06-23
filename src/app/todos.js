import { createButtonsDom } from './todoDom';

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

const editTodo = (elt, values, todoList) => {
  const button = document.getElementById('button-edit');
  button.addEventListener('click', () => {
    todoList.classList.add('d-none');

    const projectList = document.getElementById('project-list');

    projectList.classList.add('d-none');

    const todoForm = document.getElementById('todo-form');

    todoForm.classList.remove('d-none');
    document.getElementById('title').value = elt.title;
    document.getElementById('description').value = elt.description;
    document.getElementById('date').value = elt.date;
    document.getElementById('priority').value = elt.priority;
    document.getElementById('project').value = elt.project;
    editForm(values, elt);
  });
};

const todoComplete = (elt, values) => {
  const button = document.getElementById('button-complete');
  button.addEventListener('click', () => {
    if (values[values.indexOf(elt)].complete) {
      values[values.indexOf(elt)].complete = false;
      button.textContent = 'Not Complete';
    } else {
      values[values.indexOf(elt)].complete = true;
      button.textContent = 'Complete';
    }
    localStorage.setItem('todos', JSON.stringify(values));
  });
};

const deleteTodo = (elt, values) => {
  const button = document.getElementById('button-delete');
  button.addEventListener('click', () => {
    values.splice(values.indexOf(elt), 1);
    localStorage.setItem('todos', JSON.stringify(values));
    window.location.reload();
  });
};

const createButtons = (elt, values, todoList, projectName) => {
  createButtonsDom(elt, values, todoList, projectName);
  editTodo(elt, values, todoList);
  deleteTodo(elt, values);
  todoComplete(elt, values);
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
