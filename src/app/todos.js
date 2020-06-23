class Todo {
  constructor(title, description, date, priority, project) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.project = project;
  }
}

let todos = JSON.parse(window.localStorage.getItem('todos'));

if (todos == null) {
  todos = [];
}

export const todoForm = () => {
  const submit = document.getElementById('id-todo-form');

  submit.onsubmit = () => {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;
    const priority = document.getElementById('priority').value;
    const project = document.getElementById('project').value;

    const todo = new Todo(title, description, date, priority, project);
    todos.push(todo);
    document.getElementById('id-todo-form').reset();
    localStorage.setItem('todos', JSON.stringify(todos));
    alert('todo was created!');
    location.reload();
    return false;
  };
};

export const createOptions = () => {
  const projects = document.getElementById('project');
  const values = JSON.parse(window.localStorage.getItem('projects'));
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
  let values = JSON.parse(window.localStorage.getItem('todos'));
  if (values !== null) {
    todoList.querySelectorAll('*').forEach(n => n.remove());
    values.forEach((elt) => {
      if (elt.project === projectName){
        const todoName = document.createElement('p');
        todoName.textContent = `${elt.title}, due: ${elt.date}`;
        todoList.appendChild(todoName);
      }
    });
  }
};

