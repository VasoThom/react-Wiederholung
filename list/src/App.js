// import "./App.css";
import { useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [list, setList] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <TodoList list={list} />
        <input type="text" />
        <button>Add an item</button>
        <button>Clear all</button>
        <div>{list.length} left from the list "to do "</div>
      </header>
    </div>
  );
}

export default App;
