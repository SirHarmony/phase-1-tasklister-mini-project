document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const form = document.getElementById("new-task-description");
    const formInputValue = form.value;
    handleToDo(formInputValue);
    form.reset();
  });
});

//Create task
function handleToDo(submitValue) {
  //Create list item
  const listItem = document.createElement("li");
  listItem.textContent = submitValue;
  document.querySelector("#tasks").append(listItem);

  //Create delete button
  const deleteBtn = document.createElement("span");
  deleteBtn.textContent = "X";
  listItem.append(deleteBtn);
  deleteBtn.style.border = "1px solid";
  deleteBtn.style.borderRadius = "5px";
  deleteBtn.style.cursor = "pointer";
  deleteBtn.addEventListener("click", handleDelete);
}

//Delete task
function handleDelete(e) {
  e.preventDefault();
  e.target.parentNode.remove();
}
