import Link from "next/link";
import GetUsers from "../services/getUsers";  

const Page = async () => {
    
    let response = await GetUsers();
    let users = await response.users;
    return (
        <div>
            <h1>User Name List</h1>
            {
                users.map((item, key) => (
                    <div key={key}>
                        <h2>
                            <Link href={`/users/${item.id}`}> User Name : {item.firstName} </Link>
                            </h2>
                    </div>
                ))
            }
        </div>
    )
}
export default Page;

export function generateMetadata() {
    return {
        title: "User page title",
        description: "User page description"
    }
}