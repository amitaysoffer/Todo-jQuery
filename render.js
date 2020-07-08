const Renderer = function () {

    const renderTasks = function (tasks) {
        // empty the tasks div
        $('#tasks').empty();

        // append tasks to #tasks
        for (let index in tasks) {
            $('#tasks').append(
                `<div class='task' id='${tasks[index].id}'>
            <p class='task-text'><i id="edit-task" class="far fa-edit"></i>${tasks[index].text}</p>
            <i id="delete-task" class="btn fa-2x fas fa-dumpster"></i>
            <div id='notes'>
            <div id="note-control">
            <i id="add-note" class="fas fa-plus"></i>
            <input type="text" id="note-input" placeholder="Add a note">
            </div>
            </div>
            </div>`)
            for (let i in tasks[index].notes) {
                $(`#${tasks[index].id}`).find('#notes').append(
                    `<div class="note" id="${tasks[index].notes[i].id}" ><i id="delete-note" class="btn fas fa-trash"></i><p class="note-text">${tasks[index].notes[i].text}</p>
                    </div>`
                )
            }
        }
    }
    return { renderTasks }
}



