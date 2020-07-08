
const Todo = function () {

    let tasks = [];
    let idCounter = 1;

    // return tasks
    const getTasks = function () {
        return tasks
    };

    // add task
    const addTask = function (text) {
        tasks.push({
            text: text,
            id: 'task'+idCounter++
        });
        // console.log(text);
        renderer.renderTasks(tasks);
    }

    // remove task
    const deleteTask = function (taskID) {
        // console.log(taskID);
        for (let index in tasks) {
            console.log(tasks[index].id)
            console.log(taskID);
            if (tasks[index].id == taskID) {
                // console.log('HEYO')
                tasks.splice(index, 1);
                // console.log(tasks);
                // console.log(taskID);
            }
        }
        console.log(tasks)
        renderer.renderTasks(tasks);
    };

    return { getTasks, addTask, deleteTask }
};




