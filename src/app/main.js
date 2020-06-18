import { createEvent } from './events.js';
import { projectForm } from './projects.js'
import { todoForm } from './todos.js'

export const start = () => {
  createEvent();
  projectForm();
  todoForm();
}