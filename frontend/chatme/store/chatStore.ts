import {create} from "zustand";
import {Message} from "@/types/chat";

interface ChatStore {
    messages : Message[];
    addMessage  : (msg : Message) => void;
    setMessages  : (msg : Message) => void;
}


export const useChatStore =  create<ChatStore>((set) => ({
    messages : [],
    addMessage : (msg) => set((state)=> ({ messages : [...state.messages,msg]})),
    setMessages : (msgs) => set({ messages : msgs}),
}));