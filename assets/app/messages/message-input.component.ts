import { Component } from "@angular/core";
import { MessageService } from "./messages.service";
import { Message } from "./message.model";

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
})
export class MessageInputComponent {

    constructor(private messageService: MessageService) {}

    onSave(content: string) {
        const message = new Message(content, 'SurajG');
        this.messageService.addMessage(message);        
    }

}