import { EditProfileFormComponent } from "./../../components/edit-profile-form/edit-profile-form.component";
import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { EditProfilePage } from "./edit-profile";
import { ComponentsModule } from "../../components/component.module";

@NgModule({
  declarations: [EditProfilePage],
  imports: [IonicPageModule.forChild(EditProfilePage), ComponentsModule],
  exports: [EditProfilePage]
})
export class EditProfilePageModule {}
