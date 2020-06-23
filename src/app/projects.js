import { createOptions, todoShow } from './todos';

class Project {
  constructor(name) {
    this.name = name;
  }
}

let projects = JSON.parse(window.localStorage.getItem('projects'));

if (projects == null) {
  projects = [];
  const project = new Project('All todos');
  projects.push(project);
  localStorage.setItem('projects', JSON.stringify(projects));
  createOptions();
}

export const projectForm = () => {
  const submit = document.getElementById('id-project-form');
  submit.onsubmit = () => {
    const inputValue = document.getElementById('project-name');
    const project = new Project(inputValue.value);
    projects.push(project);
    document.getElementById('id-project-form').reset();
    localStorage.setItem('projects', JSON.stringify(projects));
    createOptions();
    window.location.reload();
    return false;
  };
};

export const projectShow = () => {
  const projectList = document.getElementById('project-list');
  const values = JSON.parse(window.localStorage.getItem('projects'));
  if (values != null) {
    values.forEach((elt) => {
      if (projectList.children.length < values.length + 1) {
        const projectName = document.createElement('button');
        projectList.appendChild(projectName);
        projectList.children[values.indexOf(elt) + 1].textContent = elt.name;
        projectName.addEventListener('click', () => {
          todoShow(projectName.textContent);
        });
      }
    });
  }
};
