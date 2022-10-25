import "./App.css";
import { useState } from "react";
import Todo from "./components/Todo";
function App() {
  const [inpVal, setInpVal] = useState("");
  const [todoes, setTodoes] = useState([]);

  const handleInpVal = (e) => {
    setInpVal(e.target.value);
  };

  const addTodo = () => {
    setTodoes((prev) => [
      ...prev,
      { title: inpVal, id: Math.random(), isEdit: false, isDone: false },
    ]);
    setInpVal("");
  };
  console.log(todoes);

  const deleteTodo = (id) => {
    setTodoes((prev) => prev.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    setTodoes((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          item.isEdit = true;
        }
        return item;
      })
    );
  };
  
  const handleEdited = (id, e) => {
    setTodoes((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          item.title = e.target.value;
        }
        return item;
      })
    );
  };

  const succes = (id) => {
    setTodoes((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          item.isEdit = false;
        }
        return item;
      })
    );
  };

  const closeInput = (id, firstTitle) => {
    setTodoes((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          item.title = firstTitle;
          item.isEdit = false;
        }
        return item;
      })
    );
  };

  return (
    <div className="App">
      <input
        value={inpVal}
        onChange={handleInpVal}
        type="text"
        className="input"
      />
      <button className="btn" onClick={addTodo}>
        Add
      </button>
      {todoes.map((todo) => (
        <Todo
          key={todo.id}
          succes={succes}
          closeInput={closeInput}
          handleEdited={handleEdited}
          handleEdit={handleEdit}
          deleteTodo={deleteTodo}
          {...todo}
        />
      ))}
    </div>
  );
}

export default App;
