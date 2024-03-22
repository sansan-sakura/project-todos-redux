import { useId, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

export const AddForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    dispatch(addTodo({ title: value, id: new Date() }));
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Add Todo"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};
