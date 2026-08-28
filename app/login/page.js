"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = () => {

    const router = useRouter();

    const navigate = (name) => {
        router.push(name)
    }

    return (
        <div>
            <h1 className="heading">Login Page</h1>
            <Link href='/'>Go To Home Page</Link> <br /><br />
            <button onClick={() => navigate('/login/loginstudent')}>Go to Student Login Page</button><br /><br />
            <button onClick={() => navigate('/login/loginteacher')}>Go to Teacher Login Page</button>
        </div>
    )
}

export default Page;