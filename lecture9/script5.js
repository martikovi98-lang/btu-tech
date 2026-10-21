let todos = [
  { id: 1, task: 'Buy groceries', completed: false },
  { id: 2, task: 'Do homework', completed: true }
];

function addTodo(todoList, task) {
  const newId = todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 1;
  
  const newTodo = {
    id: newId,
    task: task,
    completed: false
  };

  return [...todoList, newTodo];
}

function completeTodo(todoList, id) {
  const todo = todoList.find(t => t.id === id);
  if (todo) {
    todo.completed = true;
  }
}

function deleteTodo(todoList, id) {
  return todoList.filter(t => t.id !== id);
}

function listTodos(todoList, filter = 'all') {
  if (filter === 'completed') {
    return todoList.filter(t => t.completed === true);
  } else if (filter === 'pending') {
    return todoList.filter(t => t.completed === false);
  }
  return todoList;
}

todos = addTodo(todos, 'Read a book');

completeTodo(todos, 1);

console.log("--- ყველა Todo ('all') ---");
console.log(listTodos(todos, 'all'));

console.log("--- მხოლოდ შესრულებულები ('completed') ---");
console.log(listTodos(todos, 'completed'));

console.log("--- მხოლოდ შესასრულებლები ('pending') ---");
console.log(listTodos(todos, 'pending'));

todos = deleteTodo(todos, 2);
console.log("--- ID 2-ის წაშლის შემდეგ ('all') ---");
console.log(listTodos(todos, 'all'));