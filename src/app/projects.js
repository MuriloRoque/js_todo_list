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
    inputValue.textContent = '';
    localStorage.setItem('projects', JSON.stringify(projects));
    projectShow();
    alert('Project was created!')
  })
}

export const projectShow = () => {
  const projects = document.getElementById('project-list');
  let projectName = document.createElement('p');
  projects.appendChild(projectName);
  let values = JSON.parse(window.localStorage.getItem('projects'));
  if (values != null){
    values.forEach((elt) => {
      projects.children[values.indexOf(elt) + 1].textContent = elt.name;
    })
  }
}
