

export interface Message {
    _id : string;
    text : string;
    senderId : string;
    chatId : string;
    createdAt : string;
}

export interface Chat {
    _id : string;
    name : string;
    lastMessage?: Message;
}