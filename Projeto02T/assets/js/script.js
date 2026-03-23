const taskList = document.getElementById("taskList")
const input = document.getElementById("taskInput")

function addTask() {
    const text = input.value.trim();
    if (text === "") return;

    const task = {
        id: Date.now(),
        text: text,
        done: false
    };
    console.log(task);
}