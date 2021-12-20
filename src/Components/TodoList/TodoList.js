import React, { useContext } from "react";
import { Paper } from "@mui/material";
import { List } from "@mui/material";
import { Divider } from "@mui/material";
import Todo from "../Todo/Todo";
import { TodosContext } from "../../contexts/todos.context";

function TodoList() {
  const todos = useContext(TodosContext);

  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <>
              <Todo {...todo} key={todo.id} />
              {i < todos.length - 1 ? <Divider /> : ""}
            </>
          ))}
        </List>
      </Paper>
    );
  return null;
}

export default TodoList;
