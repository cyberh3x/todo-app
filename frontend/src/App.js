import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import TodoList from "./components/list";
import TodoProvider from "./store/app/todo-provider";

function App() {
  return (
    <TodoProvider>
      <div className="container text-center my-5">
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
