import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./todoList.module.css";
import { deleteTodo, toggleComplete } from "../redux/todoSlice";

export const TodoList = () => {
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const now = useRef(new Date());

  const onDelete = (id) => {
    dispatch(deleteTodo({ id }));
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => {
          const dueDate = new Date(todo.due);
          return (
            <li key={todo.id} className={styles.todo_item}>
              <div className={styles.upper_box}>
                <input
                  type="checkbox"
                  name="completed"
                  defaultChecked={todo.completed}
                  onChange={() =>
                    dispatch(toggleComplete({ id: todo.id, completed: !todo.completed }))
                  }
                />
                <h2>{todo.title}</h2>
              </div>
              <div className={styles.under_box}>
                <p>
                  Due:
                  {todo.due
                    ? now.current > dueDate
                      ? " overdue 😵‍💫"
                      : ` ${dueDate.toLocaleDateString("de-DE")}`
                    : null}
                </p>
                <button onClick={() => onDelete(todo.id)}>Delete</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
