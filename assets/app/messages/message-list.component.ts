import { Component, OnInit } from "@angular/core";
import { Message } from "./message.model";
import { MessageService } from "./messages.service";

@Component({
    selector: 'app-message-list',
    templateUrl: './message-list.component.html',
    styleUrls: ['./message-list.component.css'],
})
export class MessageListComponent implements OnInit {

    constructor(private messageService: MessageService) {}
    messages: Message[];

    ngOnInit() {
        this.messages = this.messageService.getMessage();
    }

}