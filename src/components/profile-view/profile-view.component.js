var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { AuthService } from "./../../providers/auth.service";
import { DataService } from "./../../providers/data.service";
import { Component, Output, EventEmitter } from "@angular/core";
import { LoadingController } from "ionic-angular";
var ProfileViewComponent = /** @class */ (function () {
    function ProfileViewComponent(loading, data, auth) {
        this.loading = loading;
        this.data = data;
        this.auth = auth;
        this.existingProfile = new EventEmitter();
        this.loader = this.loading.create({
            content: "Carregando perfil..."
        });
    }
    ProfileViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        try {
            this.loader.present();
            this.data.getAuthenticatedUserProfile().subscribe(function (user) {
                _this.userProfile = user;
                _this.existingProfile.emit(_this.userProfile);
                _this.loader.dismiss();
            });
            // this.auth.getAuthenticatedUser().subscribe(user => {
            //   console.log(user, "profile-view");
            //   this.data.getProfile(user).subscribe(profile => {
            //     this.userProfile = <Profile>profile;
            //   });
            // });
        }
        catch (e) {
            console.log(e);
        }
    };
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ProfileViewComponent.prototype, "existingProfile", void 0);
    ProfileViewComponent = __decorate([
        Component({
            selector: "app-profile-view",
            templateUrl: "profile-view.component.html"
        }),
        __metadata("design:paramtypes", [LoadingController,
            DataService,
            AuthService])
    ], ProfileViewComponent);
    return ProfileViewComponent;
}());
export { ProfileViewComponent };
//# sourceMappingURL=profile-view.component.js.map