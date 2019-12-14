import { AuthService } from "./../providers/auth.service";
import { LoginPage } from "./../pages/login/login";
import { Component } from "@angular/core";
import { Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
@Component({
  templateUrl: "app.html"
})
export class MyApp {
  rootPage: string;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private auth: AuthService
  ) {
    // this.auth.getAuthenticatedUser().subscribe(auth => {
    //   !auth ? (this.rootPage = "LoginPage") : (this.rootPage = "ChannelsPage");
    // });
    this.rootPage = "LoginPage";
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
