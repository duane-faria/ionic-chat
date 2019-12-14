import { DataService } from "./../../providers/data.service";
import { Subscription } from "rxjs/Subscription";
import { AuthService } from "./../../providers/auth.service";
import { Profile } from "./../../models/profiles/profile.interface";
import { Component, Output, EventEmitter, OnInit, Input } from "@angular/core";
import { User } from "firebase";

@Component({
  selector: "app-edit-profile-form",
  templateUrl: "edit-profile-form.component.html"
})
export class EditProfileFormComponent implements OnInit {
  private authenticatedUser$: Subscription;
  private authenticatedUser: User;

  @Output() saveProfileResult: EventEmitter<Boolean>;

  @Input() public profile: Profile;

  constructor(private auth: AuthService, private data: DataService) {
    this.authenticatedUser$ = this.auth
      .getAuthenticatedUser()
      .subscribe(User => {
        this.authenticatedUser = User;
      });
    this.saveProfileResult = new EventEmitter<Boolean>();
  }

  ngOnInit(): void {
    if (!this.profile) {
      this.profile = {} as Profile;
    }
  }

  async saveProfile() {
    if (this.authenticatedUser) {
      const result = await this.data.saveProfile(
        this.authenticatedUser,
        this.profile
      );
      this.saveProfileResult.emit(result);
    }
  }

  ngOnDestroy() {
    this.authenticatedUser$.unsubscribe();
  }
}
