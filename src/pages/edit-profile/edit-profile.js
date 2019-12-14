var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { DataService } from "./../../providers/data.service";
import { AuthService } from "./../../providers/auth.service";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
var EditProfilePage = /** @class */ (function () {
    function EditProfilePage(auth, data, navCtrl, navParams) {
        this.auth = auth;
        this.data = data;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.profile = {};
        this.profile = this.navParams.get("existingProfile");
    }
    EditProfilePage.prototype.saveProfileResult = function (event) {
        event ? this.navCtrl.push("TabsPage") : false;
    };
    EditProfilePage = __decorate([
        IonicPage(),
        Component({
            selector: "page-edit-profile",
            templateUrl: "edit-profile.html"
        }),
        __metadata("design:paramtypes", [AuthService,
            DataService,
            NavController,
            NavParams])
    ], EditProfilePage);
    return EditProfilePage;
}());
export { EditProfilePage };
//# sourceMappingURL=edit-profile.js.map