import { createOptions } from './todos';

class Project {
  constructor(name) {
    this.name = name;
  }
}

let projects = JSON.parse(window.localStorage.getItem('projects'));

if (projects == null) {
  projects = [];
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
    alert('Project was created!');
    location.reload();
    return false;
  };
};

export const projectShow = () => {
  const projectList = document.getElementById('project-list');
  const values = JSON.parse(window.localStorage.getItem('projects'));
  if (values != null) {
    values.forEach((elt) => {
      if (projectList.children.length < values.length + 2) {
        const projectName = document.createElement('button');
        projectList.appendChild(projectName);
        projectList.children[values.indexOf(elt) + 2].textContent = elt.name;
      }
    });
  }
};
