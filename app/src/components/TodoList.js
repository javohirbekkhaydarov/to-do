import React from "react";
import { FiTrash } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { throwLine } from "../store/TodoSlice";

const TodoList = ({ item, removeHandler }) => {
  const dispatch = useDispatch();

  const editHandler = (id) => {
    dispatch(throwLine(id));
  };
  return (
    <li key={item.id} className={`info-list ${item.active ? "active" : ""}`}>
      <p onClick={() => editHandler(item.id)}>{item.name}</p>
      <button className="btn btn-danger" onClick={() => removeHandler(item.id)}>
        <FiTrash />
      </button>
    </li>
  );
};

export default TodoList;
