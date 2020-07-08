const Todo = function () {

    let tasks = [];
    let idCounter = 1;
    let notesCounter = 1;

    // return tasks
    const getTasks = function () {
        return tasks
    };

    // add task
    const addTask = function (taskText) {
        tasks.push({
            text: taskText,
            id: 'task' + idCounter++,
            notes: []
        });
        renderer.renderTasks(tasks);
    }

    // add note
    const addNote = function (taskID, noteText) {
        for (let i in tasks) {
            if (tasks[i].id == taskID) {
                tasks[i].notes.push({
                    text: noteText,
                    id: 'note' + notesCounter++
                });
            }
        }
        renderer.renderTasks(tasks);
    }

    const deleteNote = function (taskID, noteID) {
        for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].id == taskID) {
                for (let j = 0; j < tasks[i].notes.length; j++) {
                    if (tasks[i].notes[j].id == noteID) {
                        console.log(tasks[i].notes);
                        console.log(tasks[i]);
                        tasks[i].notes.splice(j, 1);
                    }
                }
            }
        }
        renderer.renderTasks(tasks);
    }


    // remove task
    const deleteTask = function (taskID) {
        for (let index in tasks) {
            console.log(tasks[index].id)
            console.log(taskID);
            if (tasks[index].id == taskID) {
                tasks.splice(index, 1);
            }
        }
        renderer.renderTasks(tasks);
    };

    // edit task
    const editTask = function (taskID, newText) {
        for (let i in tasks) {
            if (tasks[i].id == taskID) {
                tasks[i].text = newText
            }
        }
        renderer.renderTasks(tasks);
    }

    return { getTasks, addTask, deleteTask, editTask, addNote, deleteNote }
};




