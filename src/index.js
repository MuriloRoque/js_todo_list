import createEvent from './app/events';
import { projectShow, projectForm } from './app/projectDom';
import { todoForm } from './app/todos';
import { createOptions } from './app/todoDom';
import './main.scss';

createEvent();
projectForm();
projectShow();
todoForm();
createOptions();
