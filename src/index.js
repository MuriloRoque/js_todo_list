import createEvent from './app/events';
import projectForm from './app/projects';
import projectShow from './app/projectDom';
import { todoForm } from './app/todos';
import { createOptions } from './app/todoDom';
import './main.scss';

createEvent();
projectForm();
projectShow();
todoForm();
createOptions();
