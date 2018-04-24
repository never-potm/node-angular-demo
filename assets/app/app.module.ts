import { MessageInputComponent } from './messages/message-input.component';
import { MessageListComponent } from './messages/message-list.component';
import { AppComponent } from './app.component';
import { NgModule } from "@angular/core";
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { MessageComponent } from './messages/message.component';
import { MessageService } from './messages/messages.service';

@NgModule({
    declarations: [AppComponent, MessageComponent, MessageListComponent, MessageInputComponent],
    imports: [BrowserModule, FormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}