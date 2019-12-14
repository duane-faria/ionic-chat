import { ChannelMessage } from "./../models/channel/channel-message.interface";
import { Channel } from "./../models/channel/channel.interface";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { Injectable } from "@angular/core";

@Injectable()
export class ChatService {
  constructor(private database: AngularFireDatabase) {}

  addChannel(channelName: string) {
    this.database.list(`channel-names`).push({
      name: channelName
    });
  }

  getChannelListRef(): AngularFireList<Channel> {
    return this.database.list(`channel-names`);
  }

  getChannelChatRef(name: string) {
    return this.database.list(`channels/${name}`).valueChanges();
  }

  async sendChannelChatMessage(chatKey: string, message: ChannelMessage) {
    await this.database.list(`channels/${chatKey}`).push(message);
  }
}
