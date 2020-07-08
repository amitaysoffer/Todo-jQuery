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
    // console.log(taskID);
    todo.deleteTask(taskID);
})




todo.addTask('Wash the car');
todo.addTask('Do my homeworks')
todo.addTask('Read a book')
todo.addTask('Take a shower')
// console.log(todo.getTasks());

// todo.deleteTask('task1');
// console.log(todo.getTasks());

