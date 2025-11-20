function markAsDone(todos) {
  for (let i = 0; i < todo.length; i++) {
    todos[i] = 'done - ' + todos[i]
  }
  return todos;
}


