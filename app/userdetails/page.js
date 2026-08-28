'use client'
import Script from "next/script";

const Page = () => {
    return (
        <div>
            <Script src="/location.js" onLoad={() => {
                console.log("File Loaded");
            }}/>
            <h1>Get User Geo Location</h1>
        </div>
    )
}
export default Page;