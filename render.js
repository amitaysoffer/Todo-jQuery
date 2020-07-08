const Renderer = function () {

    const renderTasks = function (tasks) {
        // empty the tasks div
        $('#tasks').empty();

        // append tasks to #tasks
        for (let index in tasks) {
            $('#tasks').append(
            `<div class='task' id='${tasks[index].id}'>
            <i id="edit-task" class="far fa-2x fa-edit"></i>
            <p class='task-text'>${tasks[index].text}</p>
            <i id="add-notes" class="fas fa-2x fa-plus"></i>
            <i id="delete-task" class="btn fa-2x fas fa-trash-alt"></i>
            </div>`);
        }
    }
    return { renderTasks }
}

