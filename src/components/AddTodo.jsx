import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import {addTodo} from "../features/todo/todoSlice"
function AddTodo() {
    const[input,setInput]=useState('')
    
    const dispatch=useDispatch()
    

    const addTodoHandler=(e)=>{
       
        dispatch(addTodo(input))
        setInput('')
        e.preventDefault()
    }

    return (
        <form onSubmit={addTodoHandler}  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={input}
                onChange={(e)=>setInput(e.target.value)}
            />
            <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Add
            </button>
        </form>
    );
}

export default AddTodo;

