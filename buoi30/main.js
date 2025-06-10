const API_URL = "https://api-todolist-multiuser.onrender.com/Hieu/todos";
const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");
const addTodoBtn = document.getElementById("add-todo-btn");
document.addEventListener("DOMContentLoaded", loadTodos);

async function loadTodos() {
    try {
        const response = await fetch("https://api-todolist-multiuser.onrender.com/Hieu/todos");
        const todos = await response.json();
        todoList.innerHTML = "";
        todos.forEach(renderTodo);
    } catch (error) {
        console.error("Lỗi tải danh sách:", error);
    }
}
function renderTodo(todo) {
    const todoItem = document.createElement("div");
    todoItem.className = "todo-item";
    todoItem.setAttribute("data-id", todo.id);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => updateStatus(todo.id, checkbox.checked));

    const content = document.createElement("div");
    content.className = "todo-content" + (todo.completed ? " completed" : "");
    content.textContent = todo.title;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "del-btn fa-solid fa-trash";
    deleteBtn.addEventListener("click", () => deleteTodo(todo.id));

    todoItem.appendChild(checkbox);
    todoItem.appendChild(content);
    todoItem.appendChild(deleteBtn);

    todoList.appendChild(todoItem);
}

todoForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const title = todoInput.value.trim();
    if (title === "") {
        alert("Vui lòng nhập nội dung công việc.");
        return;
    }

    const newTodo = { title, completed: false };
    try {
        const res = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTodo),
        });

        if (!res.ok) throw new Error("Lỗi khi thêm công việc.");

        const todo = await res.json();
        renderTodo(todo);
        todoInput.value = "";
        todoInput.focus();
    } catch (err) {
        console.error(err);
    }
});

async function updateStatus(id, completed) {
    try {
        const res = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ completed }),
        });
        if (!res.ok) throw new Error("Lỗi khi cập nhật trạng thái.");

        const contentEl = document.querySelector(`.todo-item[data-id="${id}"] .todo-content`);
        if (completed) {
            contentEl.classList.add("completed");
        } else {
            contentEl.classList.remove("completed");
        }
    } catch (err) {
        console.error(err);
    }
}
async function deleteTodo(id) {
    if (!confirm("Bạn có chắc chắn muốn xoá công việc này không?")) return;

    try {
        const res = await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        });
        if (!res.ok) throw new Error("Lỗi khi xoá công việc.");
        const item = document.querySelector(`.todo-item[data-id="${id}"]`);
        if (item) item.remove();
    } catch (err) {
        console.error(err);
    }
}
