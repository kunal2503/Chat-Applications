"use client"

import { create } from "domain";
import { createContext, useContext, useRef, useEffect, useState, ReactNode } from "react";

interface Message {
    type?: string;
    message : string;
}

interface SocketContextValue {
    message : Message [];
    sendMessage : (msg : string) => void;
    isConnected : boolean;
}

const SocketContext = createContext<SocketContextValue | undefined>(undefined);

