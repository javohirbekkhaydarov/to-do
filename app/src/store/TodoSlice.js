import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arr: [{ name: "Past days", active: false, id: 1 }],
  activeArr : [{ name: "Past days", active: false, id: 1 }],
};

export const TodoSLice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(action);
      state.arr.push({
        id: Date.now(),
        active: false,
        name: action.payload,
      });

     state.activeArr.push({
        id: Date.now(),
        active: false,
        name: action.payload,
      });

       localStorage.setItem("todo", JSON.stringify(state.arr))
    },

    storageTodo: (state, action) => {
      console.log(action.payload);
      state.arr = action.payload;
      state.activeArr = action.payload
      // localStorage.setItem("todo", JSON.stringify(state.arr))
    },

    removeTodo: (state, action) => {
      state.arr = state.arr.filter((item) => {
        return item.id !== action.payload;
      });

      state.activeArr = state.activeArr.filter((item) => {
        return item.id !== action.payload;
      });
      localStorage.setItem("todo", JSON.stringify(state.arr))
    },
    throwLine: (state, { payload }) => {
      for (let i = 0; i < state.arr.length; i++) {
        if (state.arr[i].id === payload) {
          state.arr[i].active = !state.arr[i].active;
        }
      }

      for (let i = 0; i < state.activeArr.length; i++) {
        if (state.activeArr[i].id === payload) {
          state.activeArr[i].active = !state.activeArr[i].active;
        }
      }
    },
    filterToDo: (state, { payload }) => {
      if (payload === "all") {
        state.arr = state.activeArr
      } else {
        let todo = [...state.activeArr].filter((item) => {
          return item.active === payload
        })

        state.arr = todo
      }
    },


  },
});

export const { addTodo, removeTodo,  storageTodo, throwLine , filterToDo ,filterFalseToDo } = TodoSLice.actions;

export default TodoSLice.reducer;