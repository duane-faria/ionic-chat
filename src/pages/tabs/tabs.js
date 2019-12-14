var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { DataService } from './../../providers/data.service';
import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, data) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.data = data;
        this.data.getAuthenticatedUserProfile().subscribe(function (profile) {
            // console.log(profile, "user component");
            _this.data.setUserOnline(profile);
        });
        this.tab1Root = "InboxPage";
        this.tab2Root = "ChannelsPage";
        this.tab3Root = "ProfilePage";
    }
    TabsPage = __decorate([
        IonicPage(),
        Component({
            selector: "page-tabs",
            templateUrl: "tabs.html"
        }),
        __metadata("design:paramtypes", [NavController, DataService])
    ], TabsPage);
    return TabsPage;
}());
export { TabsPage };
//# sourceMappingURL=tabs.js.map