import { useId, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import styles from "./addForm.module.css";

export const AddForm = () => {
  const [value, setValue] = useState("");
  const [dueDate, setDueDate] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(value, dueDate);
    dispatch(addTodo({ title: value, id: new Date(), due: dueDate }));
  };
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <div>
        <label>Todo:</label>
        <input
          name="title"
          type="text"
          placeholder="Add Todo"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div>
        <label>Due Date:</label>
        <input type="date" name="due" onChange={(e) => setDueDate(e.target.value)} />
      </div>

      <button type="submit">Add</button>
    </form>
  );
};
