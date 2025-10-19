const form = document.getElementById("taskForm");
const titleInput = document.getElementById("titleInput");
const descInput = document.getElementById("descInput");
const list = document.getElementById("taskList");

form.onsubmit = function(e) {
  e.preventDefault();

  const title = titleInput.value.trim();
  const desc = descInput.value.trim();
  if (title === "" || desc === "") return;

  const li = document.createElement("li");
  li.classList.add("task-item");
  li.innerHTML = `
    <div class="task-text">
      <strong>${title}</strong><br>
      <span>${desc}</span>
    </div>
    <button class="delBtn">Delete</button>
  `;

  li.onclick = function(e) {
    if (!e.target.classList.contains("delBtn"))
      li.classList.toggle("completed");
  };

  li.querySelector(".delBtn").onclick = function(e) {
    e.stopPropagation();
    li.remove();
  };

  list.appendChild(li);
  titleInput.value = "";
  descInput.value = "";
};