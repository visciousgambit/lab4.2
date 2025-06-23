function callcenter() {
    console.log(5)
}

const shoppinglist = [];

function addItem() {
    shoppinglist.pop()
}

let taskInput = document.getElementById("taskInput");
let addTaskButton = document.getElementById("addTaskButton");
let taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", function () {
    let taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }


    let listItem = document.createElement("li");


    listItem.innerText = taskText;
    listItem.contentEditable = "true";

    let input = document.createElement("input");
    input.type = "checkbox";

    listItem.appendChild(input);

    let mrButton = document.createElement("button");
    mrButton.innerText = "Press";

    mrButton.addEventListener("click", function (event) {
        if (event.target.parentElement.tagName === "LI") {
            taskList.removeChild(event.target.parentElement);
        }
    });

    listItem.appendChild(mrButton);

    taskList.appendChild(listItem);

    taskInput.value = "";
});
