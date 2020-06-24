import createEvent from './app/events';
import { projectShow, projectForm } from './app/projectDom';
import { todoForm, createOptions } from './app/todosDom';
import { getProjectValues } from './app/projects';

import './main.scss';

createEvent();
projectForm(getProjectValues());
projectShow(getProjectValues());
todoForm();
createOptions(getProjectValues());
