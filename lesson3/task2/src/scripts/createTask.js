import { renderTasks } from './renderer.js';
import { setItem } from './storage.js';
import { createTask, getTasksList } from './tasksGateaway.js';

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
        .then(newTasksList => {
            setItem('tasksList', newTasksList);
            renderTasks();
        });



};