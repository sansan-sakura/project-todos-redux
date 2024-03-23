import { useSelector } from "react-redux";
import { AddForm } from "./componets/addForm";
import { TodoList } from "./componets/todoList";

export const App = () => {
  const todos = useSelector((state) => state.todo);
  return (
    <div className="main">
      <header>
        <h1>REDUX TODO APP</h1>
      </header>

      <div className="container">
        <div className="col-form">
          <AddForm />
          {todos.length ? <p>You have {todos.length} todos</p> : <p>Add your todo</p>}
        </div>
        <div className="col-main">
          <TodoList />
        </div>
      </div>
      <footer>
        <small>Created by Sakura Tanaka</small>
      </footer>
    </div>
  );
};
