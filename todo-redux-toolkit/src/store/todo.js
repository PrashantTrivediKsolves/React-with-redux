import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    add: (state, action) => {
      // console.log(action);
      state.push({id:crypto.randomUUID(),value:action.payload});
    },
    handleDelete:(state,action)=>{
     return state.filter((name)=>name.id!=action.payload);
    },
    
    handleEdit:(state,action)=>
    {
      const { id, newValue } = action.payload;
      const todo = state.find((name) => name.id === id);
      if (todo) {
        todo.value = newValue;
      }
    }
    // subtract: (state, action) => {
    //   state.counterVal -= Number(action.payload);
    // }
  }
});

export const todoActions = todoSlice.actions;

export default todoSlice;