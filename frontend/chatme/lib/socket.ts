import { io } from "socket.io-client";


export const socket = io(
    process.env.SOCKET_URL || "http://localhost:5000",
    {
        autoConnect : false,
        withCredentials : true
    }
)