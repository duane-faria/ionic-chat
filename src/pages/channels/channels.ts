import { AngularFireList } from "angularfire2/database";
import { Channel } from "./../../models/channel/channel.interface";
import { Observable } from "rxjs";
import { ChatService } from "./../../providers/chat.service";
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-channels",
  templateUrl: "channels.html"
})
export class ChannelsPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private chat: ChatService
  ) {}

  channelList: AngularFireList<Channel[]>;

  showAddChannelDialog() {
    this.alertCtrl
      .create({
        title: "Insira o nome do grupo",
        inputs: [
          {
            name: "channelName"
          }
        ],
        buttons: [
          {
            text: "Cancelar",
            role: "cancel"
          },
          {
            text: "Salvar",
            handler: data => {
              this.chat.addChannel(data.channelName);
            }
          }
        ]
      })
      .present();
  }

  ionViewWillLoad() {
    this.getChannels();
  }

  getChannels() {
    this.channelList = this.chat.getChannelListRef().valueChanges();
  }

  selectChannel(channel: Channel) {
    console.log(channel);
    this.navCtrl.push("ChannelChatPage", { channel });
  }
}
