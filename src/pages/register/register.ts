import { LoginResponse } from "./../../models/login/login-response.interface";
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-register",
  templateUrl: "register.html"
})
export class RegisterPage {
  constructor(
    private navCtrl: NavController,
    public navParams: NavParams,
    private toast: ToastController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad RegisterPage");
  }
  public register(event: LoginResponse) {
    if (!event.error) {
      // console.log(event.result);
      this.toast
        .create({
          message: `Conta criada:${event.result.user.email}`,
          duration: 3000
        })
        .present();
    } else {
      this.toast
        .create({
          message: `Conta não criada: ${event.error.message}`,
          duration: 3000
        })
        .present();
    }
  }
}
