var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { SendMessageBoxComponent } from "./send-message-box/send-message-box.component";
import { EditProfileFormComponent } from "./edit-profile-form/edit-profile-form.component";
import { RegisterFormComponent } from "./register-form/register-form.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { IonicModule } from "ionic-angular";
import { NgModule } from "@angular/core";
import { ProfileViewComponent } from "./profile-view/profile-view.component";
import { ProfileSearchComponent } from "./profile-search/profile-search.component";
import { ChatMessageComponent } from "./chat-message/chat-message.component";
import { OnlineUsersComponent } from "./online-users/online-users.component";
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        NgModule({
            declarations: [
                LoginFormComponent,
                RegisterFormComponent,
                EditProfileFormComponent,
                ProfileViewComponent,
                ProfileSearchComponent,
                SendMessageBoxComponent,
                ChatMessageComponent,
                OnlineUsersComponent,
            ],
            imports: [IonicModule],
            exports: [
                LoginFormComponent,
                RegisterFormComponent,
                EditProfileFormComponent,
                ProfileViewComponent,
                ProfileSearchComponent,
                SendMessageBoxComponent,
                ChatMessageComponent,
                OnlineUsersComponent,
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());
export { ComponentsModule };
//# sourceMappingURL=component.module.js.map