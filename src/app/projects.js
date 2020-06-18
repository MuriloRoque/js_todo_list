import { createOptions } from './todos.js';

class Project {

  constructor(name) {
    this.name = name;
  }

}

let projects = [];

export const projectForm = () => {
  const submit = document.getElementById('project-submit');
  submit.addEventListener(('click'), () => {
    let inputValue = document.getElementById('project-name');
    let project = new Project(inputValue.value);
    projects.push(project);
    document.getElementById('id-project-form').reset();
    localStorage.setItem('projects', JSON.stringify(projects));
    projectShow();
    createOptions();
    alert('Project was created!')
  })
}

const projectShow = () => {
  const projects = document.getElementById('project-list');
  let projectName = document.createElement('p');
  projects.appendChild(projectName);
  let values = JSON.parse(window.localStorage.getItem('projects'));
  if (values != null){
    values.forEach((elt) => {
      projects.children[values.indexOf(elt) + 1].textContent = elt.name;
    })
  } 
  // else {
  //   let project = new Project('default project');
  //   projects.push(project);
  //   localStorage.setItem('projects', JSON.stringify(projects));
  // }
}
