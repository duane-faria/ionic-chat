import { AngularFireDatabase } from "angularfire2/database";
import { FIREBASE_CONFIG } from "./app.firebase.config";
import { AngularFireModule } from "angularfire2";
import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { MyApp } from "./app.component";
import { InboxPage } from "../pages/inbox/inbox";
import { AuthService } from "../providers/auth.service";
import { AngularFireAuthModule } from "angularfire2/auth";
import { DataService } from "../providers/data.service";
import { FormsModule } from "@angular/forms";
import { ChatService } from "./../providers/chat.service";

@NgModule({
  declarations: [MyApp],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthService,
    DataService,
    AngularFireDatabase,
    ChatService
  ]
})
export class AppModule { }
