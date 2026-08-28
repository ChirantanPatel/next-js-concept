'use client'
import { useDispatch, useSelector } from "react-redux";
import { removeUser,loadUsers } from "../redux/slice";
import { useEffect } from "react";

const DisplayUsers = () => {

    const dispatch = useDispatch();
    const userData = useSelector((data) => data.usersData.users);
     
     useEffect(() => {
        dispatch(loadUsers());
    }, [dispatch]);

    return (
        <div className="display-user">
            <h3>User List</h3>
            {
                userData && userData.map((item, key) => (
                    <div key={key} className="user-item">
                        <span>{item.name}</span>
                        <button onClick={() => dispatch(removeUser(item.id))}>Remove</button>
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayUsers;