"use client"
import Link from "next/link";

const StudentList = () => {

    return (
        <div>
            <h1 className="heading">Student List</h1>
            <ul>
                <li>
                    <Link href='/studentlist/Chirantan'>Chirantan</Link>
                </li>
                <li>
                    <Link href='/studentlist/Pavitra'>Pavitra</Link>
                </li>
                <li>
                    <Link href='/studentlist/Meet'>Meet</Link>
                </li>
                <li>
                    <Link href='/studentlist/Jay'>Jay</Link>
                </li>
            </ul>
        </div>

    )
}

export default StudentList;