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

const todoComplete = (button, elt, values) => {
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

const deleteTodo = (button, elt, values) => {
  button.addEventListener('click', () => {
    values.splice(values.indexOf(elt), 1);
    localStorage.setItem('todos', JSON.stringify(values));
    window.location.reload();
  });
};

const editTodo = (button, elt, values, todoList) => {
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

export const createButtons = (elt, values, todoList, projectName) => {
  const content = document.createElement('div');
  const todoName = document.createElement('p');
  const button = document.createElement('button');
  const editButton = document.createElement('button');
  const deleteButton = document.createElement('button');

  editButton.textContent = 'Edit';
  deleteButton.textContent = 'Delete';

  editTodo(editButton, elt, values, todoList);
  deleteTodo(deleteButton, elt, values);

  if (values[values.indexOf(elt)].complete) {
    button.textContent = 'Complete';
  } else {
    button.textContent = 'Not Complete';
  }

  todoComplete(button, elt, values);

  const {
    title, description, date, priority,
  } = elt;
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
};
