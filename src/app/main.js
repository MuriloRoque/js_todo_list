import createEvent from './events';
import { projectForm, projectShow } from './projects';
import { todoForm, createOptions } from './todos';

const start = () => {
  createEvent();
  projectForm();
  projectShow();
  todoForm();
  createOptions();
};
export default start;