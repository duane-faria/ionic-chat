var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NavController } from 'ionic-angular';
import { DataService } from './../../providers/data.service';
import { Component } from "@angular/core";
var OnlineUsersComponent = /** @class */ (function () {
    function OnlineUsersComponent(data, navCtrl) {
        var _this = this;
        this.data = data;
        this.navCtrl = navCtrl;
        this.data.getOnlineUsers().subscribe(function (el) { return _this.userList = el; });
    }
    OnlineUsersComponent.prototype.OnInit = function () {
        this.setUserOnline();
    };
    OnlineUsersComponent.prototype.setUserOnline = function () {
        var _this = this;
        this.data.getAuthenticatedUserProfile().subscribe(function (profile) {
            console.log(profile, "user component");
            _this.data.setUserOnline(profile);
        });
    };
    OnlineUsersComponent.prototype.openChat = function (profile) {
        this.navCtrl.push("MessagePage", { profile: profile });
    };
    OnlineUsersComponent = __decorate([
        Component({
            selector: "app-online-users",
            templateUrl: "./online-users.component.html"
        }),
        __metadata("design:paramtypes", [DataService, NavController])
    ], OnlineUsersComponent);
    return OnlineUsersComponent;
}());
export { OnlineUsersComponent };
//# sourceMappingURL=online-users.component.js.map