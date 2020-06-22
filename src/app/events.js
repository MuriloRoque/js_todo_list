import { projectShow } from './projects';
import { todoShow } from './todos';

const newProject = document.getElementById('new-project');
const showProject = document.getElementById('show-projects');
const newTodo = document.getElementById('new-todo');
const showTodo = document.getElementById('show-todos');

const projectForm = document.getElementById('project-form');
const projectList = document.getElementById('project-list');
const todoForm = document.getElementById('todo-form');
const todoList = document.getElementById('todo-list');

const elements = [
  [newProject, projectForm],
  [showProject, projectList],
  [newTodo, todoForm],
  [showTodo, todoList],
];

export const createEvent = () => {
  elements.forEach(elt => {
    elt[0].addEventListener(('click'), () => {
      elt[1].classList.remove('d-none');
      elements.forEach((other) => {
        if (other !== elt) {
          other[1].classList.add('d-none');
        }
      });
    });
  });
};

showProject.addEventListener(('click'), () => {
  projectShow();
});

showTodo.addEventListener(('click'), () => {
  todoShow();
});
