function addTask() {
    const input = document.getElementById("task-input");
    const taskText = input.value.trim();

    if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
            ${taskText}
            <button onclick="removeTask(this)">Delete</button>
        `;
        document.getElementById("taskList").appendChild(li);
        input.value = "";
    }
}

function removeTask(button) {
    button.parentElement.remove();
}

function submitFeedback(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const feedback = document.getElementById("feedback").value;

    alert(`Thanks ${name}! Your feedback is submitted.`);

    event.target.reset();
}
