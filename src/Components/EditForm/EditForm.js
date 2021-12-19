import React, { useContext } from "react";
import { TextField } from "@mui/material";
import useInputState from "../../hooks/useInputState";
import { TodosContext } from "../../contexts/todos.context";

function EditForm({ id, task, toggleEdit }) {
  const { dispatch } = useContext(TodosContext);
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "EDIT", id: id, newTask: value });
        reset();
        toggleEdit();
      }}
      style={{ marginLeft: "1rem", width: "50%" }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}

export default EditForm;
