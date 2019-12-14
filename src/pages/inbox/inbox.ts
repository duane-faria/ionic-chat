import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { MESSAGE_LIST } from "../../mocks/messages/messages";

@IonicPage()
@Component({
  selector: "page-inbox",
  templateUrl: "inbox.html"
})
export class InboxPage {
  public messageList = MESSAGE_LIST;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    // console.table(this.messageList);
  }
  navigateToSearchUserPage() {
    this.navCtrl.push("SearchUserPage");
  }
}
