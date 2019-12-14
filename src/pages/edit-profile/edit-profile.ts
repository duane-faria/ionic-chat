import { Profile } from "./../../models/profiles/profile.interface";
import { DataService } from "./../../providers/data.service";
import { AuthService } from "./../../providers/auth.service";
import { Component, Output, EventEmitter } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { User } from "firebase";
@IonicPage()
@Component({
  selector: "page-edit-profile",
  templateUrl: "edit-profile.html"
})
export class EditProfilePage {
  profile = {} as Profile;

  constructor(
    private auth: AuthService,
    private data: DataService,
    private navCtrl: NavController,
    private navParams: NavParams
  ) {
    this.profile = this.navParams.get("existingProfile");
  }

  saveProfileResult(event: Boolean) {
    event ? this.navCtrl.push("TabsPage") : false;
  }
}
