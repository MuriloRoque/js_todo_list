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
  const submit = document.getElementById('id-todo-form');

  submit.onsubmit = () => {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;
    const priority = document.getElementById('priority').value;
    const project = document.getElementById('project').value;

    const todo = new Todo(title, description, date, priority, project, false);
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
        const content = document.createElement('div');
        const todoName = document.createElement('p');
        const button = document.createElement('button');
        const editButton = document.createElement('button');
        const deleteButton = document.createElement('button');

        editButton.textContent = 'Edit';
        deleteButton.textContent = 'Delete';

        deleteTodo(deleteButton, elt, values);

        if(values[values.indexOf(elt)].complete){
          button.textContent = 'Complete'
        }else{
          button.textContent = 'Not Complete';
        }
        todoComplete(button, elt, values);
        const { title, description, date, priority } = elt
        todoName.innerHTML = `
                            Project: ${projectName}<br>
                            Title: ${title}<br> 
                            Description: ${description}<br> 
                            Due: ${date}<br>
                            Priority: ${priority}`;
        todoList.appendChild(content);
        content.appendChild(todoName);
        content.appendChild(button);
        content.appendChild(editButton);
        content.appendChild(deleteButton);
      }
    });
  }
};

const todoComplete = (button, elt, values) => {
  button.addEventListener('click', () => {
    if(values[values.indexOf(elt)].complete){
      values[values.indexOf(elt)].complete = false;
      button.textContent = 'Not Complete'
    }else{
      values[values.indexOf(elt)].complete = true;
      button.textContent = 'Complete';
    }
    localStorage.setItem('todos', JSON.stringify(values)); 
  })
};

const deleteTodo = (button, elt, values) => {
  button.addEventListener('click', () => { 
    values.splice(values.indexOf(elt), 1);
    localStorage.setItem('todos', JSON.stringify(values)); 
    location.reload();
  })
}
