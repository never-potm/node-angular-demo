import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Message } from "./message.model";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css']
})
export class MessageComponent {
    color = 'red';
    @Input() message: Message;
    @Output() editClicked = new EventEmitter<string>();

    onEdit() {
        this.editClicked.emit(' Edit clicked');
    }
}