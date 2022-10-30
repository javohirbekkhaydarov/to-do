import React from "react";
import { useDispatch } from "react-redux";
import {  filterToDo } from "./TodoSlice";


    const TodoFilter = () => {
    const dispatch = useDispatch()


  return (
    <div>
      <button onClick={()=>dispatch(filterToDo("all"))} className="btn btn-secondary"> all</button>
      <button onClick={()=>dispatch(filterToDo(true))} className="btn btn-success">done</button>
      <button className="btn btn-primary" onClick={()=>dispatch(filterToDo(false))} > soon</button>
    </div>
  );
};

export default TodoFilter;
