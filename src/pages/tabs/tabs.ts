import { Profile } from './../../models/profiles/profile.interface';
import { DataService } from './../../providers/data.service';
import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import { InboxPage } from "../inbox/inbox";

@IonicPage()
@Component({
  selector: "page-tabs",
  templateUrl: "tabs.html"
})
export class TabsPage {
  tab1Root: any;
  tab2Root: string;
  tab3Root: string;

  constructor(public navCtrl: NavController, private data: DataService) {
    this.data.getAuthenticatedUserProfile().subscribe((profile: Profile) => {
      // console.log(profile, "user component");
      this.data.setUserOnline(profile);
    });
    this.tab1Root = "InboxPage";
    this.tab2Root = "ChannelsPage";
    this.tab3Root = "ProfilePage";
  }
}
