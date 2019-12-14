var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ChatService } from "./../../providers/chat.service";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
var ChannelChatPage = /** @class */ (function () {
    function ChannelChatPage(chat, navCtrl, navParams) {
        this.chat = chat;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChannelChatPage.prototype.ionViewWillLoad = function () {
        this.channel = this.navParams.get("channel");
        this.channelMessages = this.chat.getChannelChatRef(this.channel.name);
    };
    ChannelChatPage.prototype.sendMessage = function (content) {
        var channelMessage = {
            content: content
        };
        this.chat.sendChannelChatMessage(this.channel.name, channelMessage);
    };
    ChannelChatPage = __decorate([
        IonicPage(),
        Component({
            selector: "page-channel-chat",
            templateUrl: "channel-chat.html"
        }),
        __metadata("design:paramtypes", [ChatService,
            NavController,
            NavParams])
    ], ChannelChatPage);
    return ChannelChatPage;
}());
export { ChannelChatPage };
//# sourceMappingURL=channel-chat.js.map