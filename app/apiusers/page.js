'use client'
import { useDispatch, useSelector } from "react-redux";
import { fetchApiUsers } from "../redux/slice";

const Page = () => {

    const dispatch = useDispatch();
    const apiUserData = useSelector((data) => data.usersData.userAPIData);
    console.log(apiUserData)
    return (
        <div>
            <h1>User List From API</h1>
            <button onClick={() => dispatch(fetchApiUsers())}>Load Users</button>

            <div className="display-user">
                <h3>User List Item</h3>
                {
                    apiUserData && apiUserData.map((item, key) => (
                        <div key={key} className="user-item">
                            <span>{item.name}</span> 
                        </div>
                    ))
                }
            </div>

        </div>
    )
}
export default Page;