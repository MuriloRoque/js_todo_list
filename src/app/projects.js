import { createOptions } from './todoDom';

class Project {
  constructor(name) {
    this.name = name;
  }
}

let projects = JSON.parse(window.localStorage.getItem('projects'));

const initialSetup = () => {
  if (projects === null) {
    projects = [];
    const project = new Project('All todos');
    projects.push(project);
    localStorage.setItem('projects', JSON.stringify(projects));
    createOptions();
  }
};

initialSetup();

const createProjectObject = (inputValue) => {
  const project = new Project(inputValue.value);
  projects.push(project);
  localStorage.setItem('projects', JSON.stringify(projects));
}
export default createProjectObject;