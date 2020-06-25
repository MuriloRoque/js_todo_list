import { projectShow } from './projectDom';
import { todoForm } from './todosDom';
import { getProjectValues } from './projects';

const newProject = document.getElementById('new-project');
const showProject = document.getElementById('show-projects');
const newTodo = document.getElementById('new-todo');

const projectForm = document.getElementById('project-form');
const projectList = document.getElementById('project-list');
const formTodo = document.getElementById('todo-form');
const todoList = document.getElementById('todo-list');

const elements = [
  [newProject, projectForm],
  [showProject, projectList],
  [newTodo, formTodo],
];

const createEvent = () => {
  elements.forEach(elt => {
    elt[0].addEventListener(('click'), () => {
      elt[1].classList.remove('d-none');
      elt[1].classList.add('d-flex');
      elements.forEach((other) => {
        if (other !== elt) {
          other[1].classList.add('d-none');
          other[1].classList.remove('d-flex');
          todoList.classList.add('d-none');
          todoList.classList.remove('d-flex');
        }
      });
    });
  });
};
export default createEvent;

showProject.addEventListener(('click'), () => {
  const values = getProjectValues();
  projectShow(values);
});

newTodo.addEventListener(('click'), () => {
  todoForm();
});
