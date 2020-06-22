import { createEvent } from './events.js';
import { projectForm, projectShow } from './projects.js'
import { todoForm, todoShow, createOptions } from './todos.js'

export const start = () => {
  createEvent();
  projectForm();
  projectShow();
  todoForm();
  todoShow();
  createOptions();
}