import { Profile } from "./../../models/profiles/profile.interface";
import { DataService } from "./../../providers/data.service";
import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-profile-search",
  templateUrl: "profile-search.component.html"
})
export class ProfileSearchComponent {
  query: string;

  profileList: Profile[];

  @Output() selectedProfile: EventEmitter<Profile>;

  constructor(private data: DataService) {
    this.selectedProfile = new EventEmitter<Profile>();
  }

  selectProfile(profile: Profile) {
    this.selectedProfile.emit(profile);
  }

  searchUser(query: string) {
    try {
      let trimmedQuery = query.trim();
      if (trimmedQuery === query) {
        this.data.searchUser(query).subscribe(d => {
          this.profileList = d;
        });
      }
    } catch (e) {
      console.log(e);
    }
  }
}
