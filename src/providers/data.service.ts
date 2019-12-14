import { AuthService } from "./auth.service";
import { Profile } from "./../models/profiles/profile.interface";
import { Injectable } from "@angular/core";
import {
  AngularFireDatabase,
  AngularFireObject,
  AngularFireList
} from "angularfire2/database";
import { User, database } from "firebase/app";
import { Observable } from "rxjs";
import "rxjs/add/operator/take";
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";

@Injectable()
export class DataService {
  profile: Observable<any>;
  profileObject: AngularFireObject<Profile>;

  profileList: AngularFireList<any>;
  items: Observable<any[]>;

  constructor(
    public database: AngularFireDatabase,
    private auth: AuthService
  ) { }

  getProfile(user) {
    let id;

    let error = false;

    try {
      id = user.user.uid;
    } catch (error) {
      try {
        id = user.uid;
      } catch (e) {
        console.log(e);
        error = true;
      }
    }
    if (!error) {
      this.profile = this.database.object(`/profiles/${id}`).valueChanges();
      return this.profile;
    }
  }

  async saveProfile(user: User, profile: Profile) {
    try {
      this.profileObject = this.database.object(`/profiles/${user.uid}`);
    } catch (e) { }
    try {
      await this.profileObject.set(profile);
      return true;
    } catch (error) {
      console.error(error);
    }
  }

  searchUser(firstName: string) {
    return this.database
      .list("/profiles", ref =>
        ref.orderByChild("firstName").equalTo(firstName)
      )
      .valueChanges();
  }

  getAuthenticatedUserProfile() {
    return this.auth
      .getAuthenticatedUser()
      .map(user => user.uid)
      .mergeMap(authId =>
        this.database.object(`profiles/${authId}`).valueChanges()
      )
      .take(1);
  }

  setUserOnline(profile: Profile) {
    const ref = database().ref(`online-users/${profile.firstName}`);

    try {
      ref.update({ ...profile });
      ref.onDisconnect().remove();
    } catch (e) {
      console.error(e);
    }

  }

  getOnlineUsers() {
    return this.database.list(`online-users`).valueChanges();
  }

}
