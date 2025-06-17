
    const API_URL = "https://api-todolist-multiuser.onrender.com/Hieu/todos";

    const todoList = document.querySelector(".todo-list");
    const todoInput = document.querySelector(".todo-input");
    const addBtn = document.querySelector("#add-todo-btn");
    const form = document.querySelector(".todo-form");

    // Tải danh sách todos khi mở trang
    document.addEventListener("DOMContentLoaded", loadTodos);

    // Load danh sách todos từ API
    async function loadTodos() {
    try {
    const res = await fetch(API_URL);
    const todos = await res.json();
    todoList.innerHTML = "";
    todos.forEach(renderTodo);
} catch (err) {
    alert("Không thể tải danh sách công việc.");
    console.error(err);
}
}

    // Hiển thị 1 công việc ra giao diện
    function renderTodo(todo) {
    const todoItem = document.createElement("div");
    todoItem.className = "todo-item";
    todoItem.setAttribute("data-id", todo._id);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => updateStatus(todo._id, checkbox.checked));

    const content = document.createElement("div");
    content.className = "todo-content" + (todo.completed ? " completed" : "");
    content.textContent = todo.title;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "del-btn fa-solid fa-trash";
    deleteBtn.addEventListener("click", () => deleteTodo(todo._id));

    todoItem.appendChild(checkbox);
    todoItem.appendChild(content);
    todoItem.appendChild(deleteBtn);

    todoList.appendChild(todoItem);
}

    // Thêm công việc mới
    form.addEventListener("submit", async (e) => {
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
    body: JSON.stringify(newTodo)
});

    if (!res.ok) throw new Error("Lỗi khi thêm công việc.");

    const todo = await res.json();
    renderTodo(todo);
    todoInput.value = "";
    todoInput.focus();
} catch (err) {
    alert("Không thể thêm công việc.");
    console.error(err);
}
});

    // Cập nhật trạng thái hoàn thành
    async function updateStatus(id, completed) {
    try {
    const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT", // hoặc PATCH đều được
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed })
});

    if (!res.ok) throw new Error("Lỗi khi cập nhật trạng thái.");

    const contentEl = document.querySelector(`.todo-item[data-id="${id}"] .todo-content`);
    if (completed) {
    contentEl.classList.add("completed");
} else {
    contentEl.classList.remove("completed");
}
} catch (err) {
    alert("Không thể cập nhật trạng thái.");
    console.error(err);
}
}

    // Xoá công việc
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
    alert("Không thể xoá công việc.");
    console.error(err);
}
}

