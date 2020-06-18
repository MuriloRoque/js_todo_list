import { createEvent } from './events.js';
import { projectForm } from './projects.js'

export const start = () => {
  createEvent();
  projectForm();
}