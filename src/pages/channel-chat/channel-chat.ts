import { ChannelMessage } from "./../../models/channel/channel-message.interface";
import { ChatService } from "./../../providers/chat.service";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Channel } from "../../models/channel/channel.interface";
import { AngularFireList } from "angularfire2/database";

@IonicPage()
@Component({
  selector: "page-channel-chat",
  templateUrl: "channel-chat.html"
})
export class ChannelChatPage {
  constructor(
    private chat: ChatService,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  channel: Channel;
  channelMessages: AngularFireList<ChannelMessage>;

  ionViewWillLoad() {
    this.channel = this.navParams.get("channel");
    this.channelMessages = this.chat.getChannelChatRef(this.channel.name);
  }

  sendMessage(content: string) {
    let channelMessage: ChannelMessage = {
      content
    };

    this.chat.sendChannelChatMessage(this.channel.name, channelMessage);
  }
}
