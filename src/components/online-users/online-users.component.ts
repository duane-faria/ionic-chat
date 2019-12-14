import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs';
import { Profile } from './../../models/profiles/profile.interface';
import { DataService } from './../../providers/data.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-online-users",
  templateUrl: "./online-users.component.html"
})
export class OnlineUsersComponent implements OnInit {

  constructor(private data: DataService, private navCtrl: NavController) {
    this.data.getOnlineUsers().subscribe(el => this.userList = el);

  }
  userList: []

  OnInit() {
    this.setUserOnline();
  }

  setUserOnline() {
    this.data.getAuthenticatedUserProfile().subscribe((profile: Profile) => {
      console.log(profile, "user component");
      this.data.setUserOnline(profile);
    });
  }

  openChat(profile: Profile) {
    this.navCtrl.push("MessagePage", { profile });
  }

}
