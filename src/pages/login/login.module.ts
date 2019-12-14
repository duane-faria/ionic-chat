// import { LoginFormComponent } from "../../components/login-form/login-form.component";
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { LoginPage } from "./login";
import { ComponentsModule } from "../../components/component.module";
import { AngularFireAuthModule } from "angularfire2/auth";
@NgModule({
  declarations: [LoginPage],
  imports: [
    IonicPageModule.forChild(LoginPage),
    ComponentsModule,
    AngularFireAuthModule
  ],
  exports: [LoginPage],
  entryComponents: []
})
export class LoginPageModule {}
