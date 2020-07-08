const renderer = Renderer();
const todo = Todo();

// click to add a task
$('#button').click(function () {
    const taskInput = $('#input');
    todo.addTask(taskInput.val());

    taskInput.val("")
})

// click to delete a task
$('#tasks').on('click', '#delete-task', function () {
    const taskID = $(this).closest('.task').attr('id');
    todo.deleteTask(taskID);
})

// click to edit task
$('#tasks').on('click', '#edit-task', function () {
    const taskText = $(this).closest('.task').find('.task-text').text();
    const taskID = $(this).closest('.task').attr('id');
    const newText = prompt('Edit existing task', taskText);

    todo.editTask(taskID, newText);
});

// click to add notes to a task
$('#tasks').on('click', '#add-note', function () {
    const taskID = $(this).closest('.task').attr('id')
    const noteInput = $(this).siblings('input');
    const noteText = noteInput.val();

    todo.addNote(taskID, noteText);
    noteInput.val("");
})

// click to delete a note from a task
$('#tasks').on('click', '#delete-note', function () {
    const noteID = $(this).closest('.note').attr('id');
    const taskID = $(this).closest('.task').attr('id');
    todo.deleteNote(taskID, noteID);
});


todo.addTask('Wash the car');
todo.addTask('Do my homeworks')


todo.addNote('task1', 'The blue one');

todo.addNote('task2', 'Make sure you do Math');
todo.addNote('task2', 'Use a pen');
// console.log(todo.getTasks());

// todo.deleteTask('task1');
// console.log(todo.getTasks());

