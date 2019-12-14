import { AuthService } from "./../../providers/auth.service";
import { Profile } from "./../../models/profiles/profile.interface";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-profile",
  templateUrl: "profile.html"
})
export class ProfilePage {
  existingProfile = {} as Profile;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private auth: AuthService
  ) {}

  getExistingProfile(profile: Profile) {
    this.existingProfile = profile;
  }

  navigateToEditProfile() {
    this.navCtrl.push("EditProfilePage", {
      existingProfile: this.existingProfile
    });
  }

  signOut() {
    this.navCtrl.push("LoginPage");
    this.auth.signOut();
  }
}
