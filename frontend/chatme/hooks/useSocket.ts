"use client"

import { useEffect } from "react"
import {socket} from "@/lib/socket";

export const useScoket = () =>{

    useEffect(()=>{
        socket.connect();

        return () =>{
            socket.disconnect();
        }
    },[])

    return socket;
};

