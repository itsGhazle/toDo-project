checkTodos();

// check for data in localStorage

function checkTodos() {
  // todos in the key of my localStorage
  let dataInLocalStorage = localStorage.getItem("todos");
  // check if it is null or not
  if (dataInLocalStorage == null) {
    todos = [];
  } else {
    todos = JSON.parse(dataInLocalStorage);
    console.log(todos);
  }
  let html = "";
  todos.forEach((todo, index) => {
    html += `<ul class="content-listGroup"><li class="listGroup-items"><input type="checkbox" class="check-box done"/><p>${todo}</p><button class="btn btn-danger" onclick='removeTodo(${index});'>Delete</button></li></ul>`;
  });
  $(".incomplete").empty().append(html);
}

// adding items in todos

$(".submit-btn").on("click", function (e) {
  e.preventDefault();
  if ($("#name").val() !== "") {
    todo = $("#name").val();
    let todosData = localStorage.getItem("todos");
    if (todosData == null) {
      todos = [];
    } else {
      todos = JSON.parse(todosData);
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    $("#name").val("");
    checkTodos();
  }
});

// logic for removing from the todos list
let removeTodo = function (index) {
  let todosData = localStorage.getItem("todos");
  console.log(typeof todosData);
  todos = JSON.parse(todosData);
  console.log(todos);
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  console.log(todos.splice(index, 1));
  checkTodos();
};
