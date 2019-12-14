import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ProfilePage } from "./profile";
import { ComponentsModule } from "../../components/component.module";

@NgModule({
  declarations: [ProfilePage],
  imports: [IonicPageModule.forChild(ProfilePage), ComponentsModule],
  exports: [ProfilePage]
})
export class ProfilePageModule {}
