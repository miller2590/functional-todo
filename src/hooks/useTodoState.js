import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function useTodoState(initialTodos) {
  const [todos, setTodos] = useState(initialTodos);
  return {
    todos,
    addTodo: function addTodo(newTodoText) {
      setTodos([
        ...todos,
        { id: uuidv4(), task: newTodoText, completed: false },
      ]);
    },
    removeTodo: function removeTodo(todoId) {
      const updatedTodos = todos.filter((todo) => todo.id !== todoId);

      setTodos(updatedTodos);
    },
    toggleTodo: function toggleTodo(todoId) {
      const updatedTodos = todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updatedTodos);
    },
    editTodo: function editTodo(todoId, newTask) {
      const updatedTodos = todos.map((todo) =>
        todo.id === todoId ? { ...todo, task: newTask } : todo
      );
      setTodos(updatedTodos);
    },
  };
}

export default useTodoState;
