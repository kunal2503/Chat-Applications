import React from "react";
import { io } from "socket.io-client";

export default function ChatLayout({ children } : { children:  React.ReactNode}){
    

    return(
        <div className="">
            {children}
        </div>
    )
}