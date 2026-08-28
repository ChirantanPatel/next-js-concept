
'use client'
import { useState } from "react";
import { addTodos } from "../redux/todoSlice";
import { useDispatch, useSelector } from "react-redux";

const AddToDo = () => {

    const dispatch = useDispatch();
    const [todo, setToDo] = useState("");
    const todosList = useSelector((data) => data.todosData.todos);
    console.log(todosList)
    const toDoDispatch = () => {
        dispatch(addTodos(todo));
        setToDo("");
    };

    return (
        <div className="add-user">
            <h3>Add To-DO</h3>
            <input type="text" className="add-user-inout" placeholder="Add To-Do" value={todo} onChange={(e) => setToDo(e.target.value)} />
            <button className="add-user-btn" onClick={toDoDispatch}>Add To-Do</button>

            <h3>To-Do List</h3>
            {
                todosList && todosList.map((item, key) => (
                    <div key={key} className="user-item">
                        <span>{item.name}</span> 
                    </div>
                ))
            }

        </div>
    )
}

export default AddToDo;