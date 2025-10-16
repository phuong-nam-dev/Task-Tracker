const input = document.getElementById("input");
const list = document.getElementById("list");

const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="trash-2" class="lucide lucide-trash-2"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>`;

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    const task = input.value.trim();

    if (task) {
      const length = list.children.length;

      list.insertAdjacentHTML(
        "beforeend",
        `<li><input type="checkbox" id="checkbox_${
          length + 1
        }" /><div>${task}</div>${icon}</li>`
      );

      input.value = "";
    }
  }
});

list.addEventListener("click", function (event) {
  if (event.target.id.includes("checkbox_")) {
    const div = event.target.nextElementSibling;
    if (event.target.checked) {
      div.style.textDecoration = "line-through";
    } else {
      div.style.textDecoration = "none";
    }
  }

  if (event.target.closest("svg")) {
    const li = event.target.closest("li");
    li.remove();
  }
});
