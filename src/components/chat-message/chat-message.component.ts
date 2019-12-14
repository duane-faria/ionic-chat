import { Message } from "../../models/message/message.interface";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-chat-message",
  templateUrl: "chat-message.component.html"
})
export class ChatMessageComponent {
  // 'Input' sinaliza que ele vai receber algo do componente pai

  @Input() chatMessage: Message;

  @Input() chatIndex: number;

  constructor() {}
}
