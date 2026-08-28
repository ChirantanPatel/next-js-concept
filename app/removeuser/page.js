'use client'
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slice";

const Page = () => {

    const dispatch = useDispatch();
    const userData = useSelector((data) => data.usersData.users);
    
    return(
        <div>
            <h1>Remove User Page</h1>
            {
                userData.map((item, key) => (
                    <div key={key} className="user-item">
                        <span>{item.name}</span>
                        <button onClick={() => dispatch(removeUser(item.id))}>Remove</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Page;