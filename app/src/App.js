import "./App.css";
import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, storageTodo } from "./store/TodoSlice";
import TodoFilter from "./store/TodoFilter";

function App() {
  const { arr, activeArr } = useSelector((state) => state.todo);
  const [inputVal, setInputVal] = useState("");
  const [localArr, setLocalArr] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.getItem("todo")
    if (localStorage.getItem("todo")) {
      const storeList = JSON.parse(localStorage.getItem("todo"));
      setLocalArr(storeList);
    }
    console.log(localStorage.getItem("todo"));
    // dispatch(storageTodo());
  }, [dispatch]);

  useEffect(()=>{
    if(localArr!=[]) {
      console.log(localArr);
      dispatch(storageTodo(localArr))};
  },[localArr]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputVal) {
      dispatch(addTodo(inputVal));
    }
    setInputVal("");
  };

  const removeHandler = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="App ">
      <form action="#" onSubmit={handleSubmit}>
        <div className="center">
          <input
            type="text"
            id="input"
            onChange={(e) => setInputVal(e.target.value)}
            value={inputVal}
            className="input"
          />
          <button type="submit" className="btn btn-warning">
            submit
          </button>
        </div>
      </form>
      <br />
      <br />
      <TodoFilter />
      <div className="info-card">
        {arr.length < 1 ? (
          <h2>empty👀</h2>
        ) : (
          <ul>
            <br />

            {arr.map((item, id) => {
              return (
                <div key={id}>
                  <br />
                  <TodoList item={item} removeHandler={removeHandler} />
                </div>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;