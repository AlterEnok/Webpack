import { renderTasks } from './renderer';
import { getItem, setItem } from './storage';
import { createTask, getTasksList } from './tasksGateaway';

export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector('.task-input');

  const text = taskTitleInputElem.value;

  if (!text) {
    return;
  }

  taskTitleInputElem.value = '';

  const newTask = {

    text,
    done: false,
    createDate: new Date().toISOString(),
    id: Math.random().toString(),

  };

  createTasks(newTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};
