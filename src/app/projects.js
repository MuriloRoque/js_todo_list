class Project {

  constructor(name) {
    this.name = name;
  }

}

let projects = [];

export const projectForm = () => {
  const submit = document.getElementById('project-submit');
  submit.addEventListener(('click'), () => {
    let project = new Project(document.getElementById('project-name').value);
    projects.push(project);
    localStorage.setItem('projects', JSON.stringify(projects));
    console.log(localStorage['projects']);
  })
}
