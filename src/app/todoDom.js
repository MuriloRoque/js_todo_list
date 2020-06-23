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

export const createButtonsDom = (elt, values, todoList, projectName) => {
  const content = document.createElement('div');
  const todoName = document.createElement('p');
  const button = document.createElement('button');
  button.setAttribute('id', 'button-complete');
  const editButton = document.createElement('button');
  editButton.setAttribute('id', 'button-edit');
  const deleteButton = document.createElement('button');
  deleteButton.setAttribute('id', 'button-delete');
  const {
    title, description, date, priority,
  } = elt;
  todoName.innerHTML = `
                      Project: ${projectName}<br>
                      Title: ${title}<br> 
                      Description: ${description}<br> 
                      Due: ${date}<br>
                      Priority: ${priority}`;
  todoName.classList.add('ml-5');
  todoList.classList.add('flex-column');
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
};
