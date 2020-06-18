export const createProject = () => {
    const newProject = document.getElementById('new-project');
    newProject.addEventListener(('click'), () => {
        const projectForm = document.getElementById('project-form');
        projectForm.classList.remove('d-none');
    })
}
