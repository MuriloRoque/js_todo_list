class Todo {

    constructor(title, description, date, priority, project) {
      this.title = title;
      this.description = description;
      this.date = date;
      this.priority = priority;
      this.project = project;
    }
  
  }
  
  let todos = [];
  
  export const todoForm = () => {
    const submit = document.getElementById('id-todo-form');
    
    submit.onsubmit = () => {
      const title = document.getElementById('title').value;
      const description = document.getElementById('description').value;
      const date = document.getElementById('date').value;
      const priority = document.getElementById('priority').value;
      const project = document.getElementById('project').value;

      let todo = new Todo(title, description, date, priority, project);
      todos.push(todo);
      document.getElementById('id-todo-form').reset();
      localStorage.setItem('todos', JSON.stringify(todos));
      todoShow();
      alert('todo was created!')
      return false;
    }
  }

  export const createOptions = () => {
    const projects = document.getElementById('project');
    let projectName = document.createElement('option');
    projects.appendChild(projectName);
    let values = JSON.parse(window.localStorage.getItem('projects'));

    if (values != null){
        values.forEach((elt) => {
          projects.children[values.indexOf(elt)+ 1].textContent = elt.name;
        })
    }
  }
  
  export const todoShow = () => {
    const todos = document.getElementById('todo-list');
    let todoName = document.createElement('p');
    todos.appendChild(todoName);
    let values = JSON.parse(window.localStorage.getItem('todos'));
    if (values != null){
      values.forEach((elt) => {
        todos.children[values.indexOf(elt) + 1].textContent = `${elt.title}, due: ${elt.date}`;
      })
    }
  }
  