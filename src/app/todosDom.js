import {
  createTodoObject, editTodoObject, setComplete, setDelete, getTodoValues,
} from './todos';

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
    editTodoObject(title, description, date, priority, project, values);
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
    setComplete(values);
  });
};

const deleteTodo = (elt, values, n) => {
  const button = document.getElementById(`button-delete${n}`);
  button.addEventListener('click', () => {
    setDelete(elt, values);
    window.location.reload();
  });
};

const createButtonsDom = (elt, values, todoList, projectName, n) => {
  const content = document.createElement('div');
  const todoName = document.createElement('p');
  const button = document.createElement('button');
  button.setAttribute('id', `button-complete${n}`);
  button.classList.add('btn', 'btn-success', 'buttons', 'mr-3', 'complete-button');
  const editButton = document.createElement('button');
  editButton.setAttribute('id', `button-edit${n}`);
  editButton.classList.add('btn', 'btn-info', 'buttons', 'mr-3');
  const deleteButton = document.createElement('button');
  deleteButton.setAttribute('id', `button-delete${n}`);
  deleteButton.classList.add('btn', 'btn-danger', 'buttons', 'mr-3');
  const {
    title, description, date, priority,
  } = elt;
  todoName.innerHTML = `
                      <strong>Project:</strong> ${projectName}<br>
                      <strong>Title:</strong> ${title}<br> 
                      <strong>Description:</strong> ${description}<br> 
                      <strong>Due:</strong> ${date}<br>
                      <strong>Priority:</strong> ${priority}`;
  content.classList.add('mb-3', 'd-flex', 'border', 'border-dark', 'p-3', 'content');
  todoList.classList.add('flex-column', 'align-items-center');
  todoName.classList.add('mr-3');
  todoList.appendChild(content);
  content.appendChild(todoName);
  content.appendChild(button);
  content.appendChild(editButton);
  content.appendChild(deleteButton);

  editButton.textContent = 'Edit';
  deleteButton.textContent = 'Delete';
  if (values[values.indexOf(elt)].complete) {
    button.textContent = 'Complete';
  } else {
    button.textContent = 'Not Complete';
  }
  return n;
};

const createButtons = (elt, values, todoList, projectName, n) => {
  n = createButtonsDom(elt, values, todoList, projectName, n);
  editTodo(elt, values, todoList, n);
  deleteTodo(elt, values, n);
  todoComplete(elt, values, n);
};

export const createOptions = (values) => {
  const projects = document.getElementById('project');
  if (values != null) {
    values.forEach((elt) => {
      const projectName = document.createElement('option');
      projects.appendChild(projectName);
      projects.children[values.indexOf(elt)].textContent = elt.name;
    });
  }
};

export const todoShow = (projectName) => {
  const todoList = document.getElementById('todo-list');
  todoList.classList.remove('d-none');
  todoList.classList.add('d-flex');
  const values = getTodoValues();
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
    createTodoObject(title, description, date, priority, project);
    window.location.reload();
    return false;
  };
};
