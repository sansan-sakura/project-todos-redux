import { AddForm } from "./componets/addForm";
import { TodoList } from "./componets/todoList";

export const App = () => {
  return (
    <div className="main">
      <header>
        <h1>REDUX TODO APP</h1>
      </header>

      <div className="container">
        <div className="col-form">
          <AddForm />
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
