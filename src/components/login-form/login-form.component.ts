import { AngularFireAuth } from "angularfire2/auth";
import { NavController } from "ionic-angular";
import { Component, EventEmitter, Output } from "@angular/core";
import { Account } from "../../models/account/account.interface";
import { LoginResponse } from "../../models/login/login-response.interface";
@Component({
  selector: "app-login-form",
  templateUrl: "login-form.component.html"
})
export class LoginFormComponent {
  account = {} as Account;

  @Output() loginStatus: EventEmitter<LoginResponse>;

  constructor(public navCtrl: NavController, private ofAuth: AngularFireAuth) {
    this.loginStatus = new EventEmitter<LoginResponse>();
  }

  async login() {
    try {
      const result: LoginResponse = {
        result: await this.ofAuth.auth.signInWithEmailAndPassword(
          this.account.email,
          this.account.password
        )
      };

      this.loginStatus.emit(result);
    } catch (e) {
      const error: LoginResponse = {
        error: e
      };
      this.loginStatus.emit(error);
    }
  }

  public navigateToRegisterPage() {
    this.navCtrl.push("RegisterPage");
  }
}
