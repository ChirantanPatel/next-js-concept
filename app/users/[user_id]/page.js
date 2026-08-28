
import GetUsers from "../../services/getUsers";

const Page = async (props) => {

    const params = await props.params;

    let response = await GetUsers();
    let users = response.users;
    const userData = users.find((user) => user.id === Number(params.user_id));
    return (
        <div>
            <h1>Static Site Generation (SSG) Example</h1>


            <h1>User Details Page</h1>
            <h4> Id : {userData.id} </h4>
            <h4> Name : {userData.firstName} {userData.maidenName} {userData.lastName}</h4>
            <h4> Email : {userData.email} </h4>
            <h4> Phone : {userData.phone} </h4>
        </div>
    )
}
export default Page;

export async function generateStaticParams() {
    const response = await GetUsers();
    const users = response.users;

    return users.map(user => ({
        user_id: user.id.toString()
    }));
}
