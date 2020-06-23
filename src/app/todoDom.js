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

export const createButtonsDom = (elt, values, todoList, projectName, n) => {
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
