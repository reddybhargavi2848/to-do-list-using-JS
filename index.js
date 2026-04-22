
// let form = document.getElementById("form")
// const allTasks = []

// const validateForm = (event) => {
//     event.preventDefault()

//     let display = document.getElementById("display");
//     let userInput = event.target.ui;

//     // allTasks.forEach((task) => {
//     //     console.log(task)
//     // });
//     // difference between forEach() and map()?

//     allTasks.push(userInput.value); 

//     display.innerHTML = ""
//     display.innerHTML +=
//       allTasks.map((task) =>
//         `<li>${task} <button>delete</button> </li>`
// );

//     userInput.value = "";
// };

// form.addEventListener('submit', validateForm);


const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    // Create the list item element
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create the delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    
    // Set up the delete functionality
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };

    // Add the delete button to the list item, and the item to the list
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
}

// Attach the function to the Add button click
addTaskBtn.addEventListener('click', addTask);

// Optionally allow pressing 'Enter' to add the task
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});