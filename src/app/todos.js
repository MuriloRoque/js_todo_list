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

const editTodo = (elt, values, todoList, n) => {
  const button = document.getElementById(`button-edit${n}`);
  button.addEventListener('click', () => {
    todoList.classList.add('d-none');
    todoList.classList.remove('d-flex');
    const projectList = document.getElementById('project-list');

    projectList.classList.add('d-none');
    projectList.classList.remove('d-flex');

    const todoForm = document.getElementById('todo-form');

    todoForm.classList.remove('d-none');
    todoForm.classList.add('d-flex');
    document.getElementById('title').value = elt.title;
    document.getElementById('description').value = elt.description;
    document.getElementById('date').value = elt.date;
    document.getElementById('priority').value = elt.priority;
    document.getElementById('project').value = elt.project;
    editForm(values, elt);
  });
};

const todoComplete = (elt, values, n) => {
  const button = document.getElementById(`button-complete${n}`);
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

const deleteTodo = (elt, values, n) => {
  const button = document.getElementById(`button-delete${n}`);
  button.addEventListener('click', () => {
    values.splice(values.indexOf(elt), 1);
    localStorage.setItem('todos', JSON.stringify(values));
    window.location.reload();
  });
};

const createButtons = (elt, values, todoList, projectName, n) => {
  n = createButtonsDom(elt, values, todoList, projectName, n);
  editTodo(elt, values, todoList, n);
  deleteTodo(elt, values, n);
  todoComplete(elt, values, n);
};

export const todoShow = (projectName) => {
  const todoList = document.getElementById('todo-list');

  todoList.classList.remove('d-none');
  todoList.classList.add('d-flex');

  const values = JSON.parse(window.localStorage.getItem('todos'));
  if (values !== null) {
    todoList.querySelectorAll('*').forEach(i => i.remove());
    let n = 0;
    values.forEach((elt) => {
      if (elt.project === projectName) {
        n += 1;
        createButtons(elt, values, todoList, projectName, n);
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
