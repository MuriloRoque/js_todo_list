import { createEvent } from './events';
import { projectForm, projectShow } from './projects';
import { todoForm, todoShow, createOptions } from './todos';

export const start = () => {
  createEvent();
  projectForm();
  projectShow();
  todoForm();
  createOptions();
};