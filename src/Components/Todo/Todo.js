import React, { useContext } from "react";
import { Checkbox, ListItem } from "@mui/material";
import { ListItemText } from "@mui/material";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { ListItemSecondaryAction } from "@mui/material";
import useToggleState from "../../hooks/useToggleState";
import EditForm from "../EditForm/EditForm";
import { TodosContext } from "../../contexts/todos.context";

function Todo({ task, completed, id }) {
  const { dispatch } = useContext(TodosContext);
  const [isEditing, toggle] = useToggleState(false);
  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <EditForm id={id} task={task} toggleEdit={toggle} />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            checked={completed}
            onClick={() => dispatch({ type: "TOGGLE", id: id })}
          />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Delete"
              onClick={() => dispatch({ type: "REMOVE", id: id })}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="Edit" onClick={toggle}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default Todo;
