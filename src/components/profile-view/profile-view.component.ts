import { Profile } from "./../../models/profiles/profile.interface";
import { User } from "firebase/app";
import { AuthService } from "./../../providers/auth.service";
import { DataService } from "./../../providers/data.service";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Loading, LoadingController } from "ionic-angular";
@Component({
  selector: "app-profile-view",
  templateUrl: "profile-view.component.html"
})
export class ProfileViewComponent implements OnInit {
  userProfile: Profile;

  private loader: Loading;
  // private loading: LoadingController;

  @Output() existingProfile: EventEmitter<Profile>;

  constructor(
    private loading: LoadingController,
    private data: DataService,
    private auth: AuthService
  ) {
    this.existingProfile = new EventEmitter<Profile>();

    this.loader = this.loading.create({
      content: "Carregando perfil..."
    });
  }

  ngOnInit(): void {
    try {
      this.loader.present();
      this.data.getAuthenticatedUserProfile().subscribe(user => {
        this.userProfile = <Profile>user;
        this.existingProfile.emit(this.userProfile);
        this.loader.dismiss();
      });

      // this.auth.getAuthenticatedUser().subscribe(user => {
      //   console.log(user, "profile-view");
      //   this.data.getProfile(user).subscribe(profile => {
      //     this.userProfile = <Profile>profile;
      //   });
      // });
    } catch (e) {
      console.log(e);
    }
  }
}
