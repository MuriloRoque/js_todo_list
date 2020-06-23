import { todoShow } from './todos';

const projectShow = () => {
  const projectList = document.getElementById('project-list');
  const values = JSON.parse(window.localStorage.getItem('projects'));
  if (values != null) {
    values.forEach((elt) => {
      if (projectList.children.length < values.length) {
        const projectName = document.createElement('button');
        projectName.classList.add('btn','btn-warning','m-3');
        projectList.appendChild(projectName);
        projectList.classList.add('justify-content-center')
        projectList.children[values.indexOf(elt)].textContent = elt.name;
        projectName.addEventListener('click', () => {
          todoShow(projectName.textContent);
        });
      }
    });
  }
};
export default projectShow;