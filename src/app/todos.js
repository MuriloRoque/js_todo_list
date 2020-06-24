class Todo {
  constructor(title, description, date, priority, project, complete) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.project = project;
    this.complete = complete;
  }
}

let todos = JSON.parse(window.localStorage.getItem('todos'));

if (todos == null) {
  todos = [];
}

export const createTodoObject = (title, description, date, priority, project) => {
  const todo = new Todo(title, description, date, priority, project, false);
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
};

export const editTodoObject = (title, description, date, priority, project, values) => {
  const todo = new Todo(title, description, date, priority, project, false);
  values.push(todo);
  localStorage.setItem('todos', JSON.stringify(values));
};

export const setComplete = (values) => {
  localStorage.setItem('todos', JSON.stringify(values));
};

export const setDelete = (elt, values) => {
  values.splice(values.indexOf(elt), 1);
  localStorage.setItem('todos', JSON.stringify(values));
};

export const getTodoValues = () => JSON.parse(window.localStorage.getItem('todos'));
