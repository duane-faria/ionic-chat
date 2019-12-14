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
import { Component, Output, EventEmitter } from "@angular/core";
var ProfileSearchComponent = /** @class */ (function () {
    function ProfileSearchComponent(data) {
        this.data = data;
        this.selectedProfile = new EventEmitter();
    }
    ProfileSearchComponent.prototype.selectProfile = function (profile) {
        this.selectedProfile.emit(profile);
    };
    ProfileSearchComponent.prototype.searchUser = function (query) {
        var _this = this;
        try {
            var trimmedQuery = query.trim();
            if (trimmedQuery === query) {
                this.data.searchUser(query).subscribe(function (d) {
                    _this.profileList = d;
                });
            }
        }
        catch (e) {
            console.log(e);
        }
    };
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ProfileSearchComponent.prototype, "selectedProfile", void 0);
    ProfileSearchComponent = __decorate([
        Component({
            selector: "app-profile-search",
            templateUrl: "profile-search.component.html"
        }),
        __metadata("design:paramtypes", [DataService])
    ], ProfileSearchComponent);
    return ProfileSearchComponent;
}());
export { ProfileSearchComponent };
//# sourceMappingURL=profile-search.component.js.map