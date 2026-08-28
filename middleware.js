import { NextResponse } from "next/server";

const MiddleWare = (request) => {
    console.log("MiddleWare");
    // if(request.nextUrl.pathname != "/login") {
        return NextResponse.redirect(new URL("/login", request.url))
    // }
    
}

export default MiddleWare;

export const config = {
    matcher : ["/about/:path*","/studentlist/:path*"]
}
 