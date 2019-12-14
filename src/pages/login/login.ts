import { DataService } from "./../../providers/data.service";
import { LoginResponse } from "./../../models/login/login-response.interface";
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from "ionic-angular";
import { User } from "firebase";
@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  constructor(
    private navCtrl: NavController,
    public navParams: NavParams,
    private toast: ToastController,
    private data: DataService
  ) { }

  login(event: LoginResponse) {
    if (!event.error) {
      // console.log(event.result);
      this.toast
        .create({
          message: `Bem vindo ao beep, ${event.result.email}`,
          duration: 3000
        })
        .present();

      this.data.getProfile(event.result).subscribe(profile => {
        profile
          ? this.navCtrl.push("TabsPage") //TabsPage
          : this.navCtrl.setRoot("EditProfilePage");
      });
    } else {
      this.toast
        .create({
          message: event.error.message,
          duration: 3000
        })
        .present();
    }
  }
}
