import React, { useState } from "react";
import TodoList from "../TodoList/TodoList";
import TodoForm from "../TodoForm/TodoForm";
import { Typography } from "@mui/material";
import { Paper } from "@mui/material";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Grid } from "@mui/material";

function TodoApp() {
  const initialTodos = [
    { id: 1, task: "Clean Fishtank", completed: false },
    { id: 2, task: "Wash Car", completed: true },
    { id: 3, task: "Grow Beard", completed: false },
  ];
  const [todos, setTodos] = useState(initialTodos);
  return (
    <Paper elevation={3}>
      <AppBar position="static" color="primary" enableColorOnDark>
        <Toolbar>
          <Typography color="inherit">Todos With Hooks</Typography>
        </Toolbar>
      </AppBar>
      <TodoForm />
      <TodoList todos={todos} />
    </Paper>
  );
}

export default TodoApp;
