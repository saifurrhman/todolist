
function addTask() {
    const inputBox = document.getElementById("input-box");
    const taskText = inputBox.value.trim(); 
    if (taskText !== "") {
        const listContainer = document.getElementById("listcontaniner");
        const newTaskItem = document.createElement("li");
        newTaskItem.textContent = taskText;       
        const deleteButton = document.createElement("buttonDELETE");
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.classList.add("delete");       
        newTaskItem.appendChild(deleteButton);
        listContainer.appendChild(newTaskItem);       
        inputBox.value = "";
        deleteButton.addEventListener("click", function(e) {
            newTaskItem.remove(e);
        });
    }
}
const addButton = document.querySelector("button[oneclick='addtask()']");
addButton.addEventListener("click", addTask);
const inputBox = document.getElementById("input-box");
inputBox.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
