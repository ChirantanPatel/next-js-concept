const GetUsers = async () => {
    let data = await fetch("https://dummyjson.com/users");
    return await data.json();
}
export default GetUsers;