
let form = document.getElementById("form")
const allTasks = []

const validateForm = (event) => {
    event.preventDefault()

    let display = document.getElementById("display");
    let userInput = event.target.ui;

    // allTasks.forEach((task) => {
    //     console.log(task)
    // });
    // difference between forEach() and map()?

    allTasks.push(userInput.value); 

    display.innerHTML = ""
    display.innerHTML +=
      allTasks.map((task) =>
        `<li>${task} <button>delete</button> </li>`
);

    userInput.value = "";
};

form.addEventListener('submit', validateForm);