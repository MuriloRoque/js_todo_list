import { todoShow } from './todos';

const projectShow = () => {
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
export default projectShow;