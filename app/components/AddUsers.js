'use client'
import { useState } from "react";
import { addUser } from "../redux/slice";
import { useDispatch } from "react-redux";
import Link from "next/link";

const AddUsers = () => {

    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const userDispatch = () => {
        dispatch(addUser(name));
        setName("");
    };

    return (
        <div className="add-user">
            <h3>Add User</h3>
            <input type="text" className="add-user-inout" placeholder="Add New User" value={name} onChange={(e) => setName(e.target.value)} />
            <button className="add-user-btn" onClick={userDispatch}>Add User</button>
            <Link href="/removeuser">Remove User</Link> <br />
            <Link href="/todolist">Go to To-Do List</Link> <br />
            <Link href="/apiusers">Go to API User List With Redux Page </Link>
        </div>
    )
}

export default AddUsers;