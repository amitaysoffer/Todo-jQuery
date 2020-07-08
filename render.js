const Renderer = function () {

    const renderTasks = function (tasks) {
        // empty the tasks div
        $('#tasks').empty();

        // append tasks to #tasks
        for (let index in tasks) {
            $('#tasks').append(`<div class='task' id='${tasks[index].id}'><span class='task-text'>${tasks[index].text}</span><i id="delete-task" class="btn fa-2x fas fa-trash-alt"></i></div>`);
        }
    }
    return { renderTasks }
}

