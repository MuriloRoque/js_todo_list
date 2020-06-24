import { createOptions } from './todosDom';

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
    const values = JSON.parse(window.localStorage.getItem('projects'));
    createOptions(values);
  }
};

initialSetup();

export const createProjectObject = (inputValue) => {
  const project = new Project(inputValue.value);
  projects.push(project);
  localStorage.setItem('projects', JSON.stringify(projects));
};

export const getProjectValues = () => JSON.parse(window.localStorage.getItem('projects'));
