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
import { IonicPage, NavController, NavParams, AlertController } from "ionic-angular";
var ChannelsPage = /** @class */ (function () {
    function ChannelsPage(navCtrl, navParams, alertCtrl, chat) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.chat = chat;
    }
    ChannelsPage.prototype.showAddChannelDialog = function () {
        var _this = this;
        this.alertCtrl
            .create({
            title: "Insira o nome do grupo",
            inputs: [
                {
                    name: "channelName"
                }
            ],
            buttons: [
                {
                    text: "Cancelar",
                    role: "cancel"
                },
                {
                    text: "Salvar",
                    handler: function (data) {
                        _this.chat.addChannel(data.channelName);
                    }
                }
            ]
        })
            .present();
    };
    ChannelsPage.prototype.ionViewWillLoad = function () {
        this.getChannels();
    };
    ChannelsPage.prototype.getChannels = function () {
        this.channelList = this.chat.getChannelListRef().valueChanges();
    };
    ChannelsPage.prototype.selectChannel = function (channel) {
        console.log(channel);
        this.navCtrl.push("ChannelChatPage", { channel: channel });
    };
    ChannelsPage = __decorate([
        IonicPage(),
        Component({
            selector: "page-channels",
            templateUrl: "channels.html"
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            AlertController,
            ChatService])
    ], ChannelsPage);
    return ChannelsPage;
}());
export { ChannelsPage };
//# sourceMappingURL=channels.js.map