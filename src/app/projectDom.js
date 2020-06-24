import { todoShow, createOptions } from './todosDom';
import { createProjectObject } from './projects';


export const projectShow = (values) => {
  const projectList = document.getElementById('project-list');
  if (values != null) {
    values.forEach((elt) => {
      if (projectList.children.length < values.length) {
        const projectName = document.createElement('button');
        projectName.classList.add('btn', 'btn-warning', 'm-3');
        projectList.appendChild(projectName);
        projectList.classList.add('justify-content-center');
        projectList.children[values.indexOf(elt)].textContent = elt.name;
        projectName.addEventListener('click', () => {
          todoShow(projectName.textContent);
        });
      }
    });
  }
};

export const projectForm = (values) => {
  const submit = document.getElementById('id-project-form');
  submit.onsubmit = () => {
    const inputValue = document.getElementById('project-name');
    createProjectObject(inputValue);
    createOptions(values);
    window.location.reload();
    return false;
  };
};
