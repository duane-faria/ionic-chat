import { LoginResponse } from "./../../models/login/login-response.interface";
import { AuthService } from "./../../providers/auth.service";
import { Component, Output, EventEmitter } from "@angular/core";
import { Account } from "../../models/account/account.interface";

@Component({
  selector: "app-register-form",
  templateUrl: "register-form.component.html"
})
export class RegisterFormComponent {
  account = {} as Account;

  @Output() registerStatus: EventEmitter<LoginResponse>;

  constructor(private auth: AuthService) {
    this.registerStatus = new EventEmitter<LoginResponse>();
  }

  async register() {
    try {
      const result = await this.auth.createUserWithEmailAndPassword(
        this.account
      );

      this.registerStatus.emit(result);
    } catch (e) {
      this.registerStatus.emit(e);
    }
  }
}
