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
            <h1>About Page</h1>
            <button onClick={() => navigate('/')}>Go To About Page</button> <br/> <br/>

            <Link href='/about/aboutcollege'>Go To About College Page</Link> <br />
            <Link href='/about/aboutstudent'>Go To About Student Page</Link> <br />
        </div>

    )
}

export default Page;