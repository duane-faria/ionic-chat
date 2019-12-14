import { Message } from "./../../models/message/message.interface";
import { MESSAGE_LIST } from "./../../mocks/messages/messages";
import { Profile } from "./../../models/profiles/profile.interface";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-message",
  templateUrl: "message.html"
})
export class MessagePage {
  selectedProfile: Profile;

  messages: Message[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.messages = MESSAGE_LIST;
  }

  ionViewWillLoad() {
    this.selectedProfile = this.navParams.get("profile");
  }
}
