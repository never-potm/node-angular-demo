import { Message } from "./message.model";
import { Injectable } from "@angular/core";

export class MessageService {
    private messages: Message[] = [];

    constructor() {}

    addMessage(message: Message) {
        this.messages.push(message);
        console.log(this.messages);
    }

    getMessage() {
        return this.messages;
    }

    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1)
    }
}