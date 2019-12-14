var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, EventEmitter } from "@angular/core";
var SendMessageBoxComponent = /** @class */ (function () {
    function SendMessageBoxComponent() {
        this.sendMessage = new EventEmitter();
    }
    SendMessageBoxComponent.prototype.send = function () {
        this.sendMessage.emit(this.content);
        this.content = "";
    };
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], SendMessageBoxComponent.prototype, "sendMessage", void 0);
    SendMessageBoxComponent = __decorate([
        Component({
            selector: "app-send-message-box",
            templateUrl: "send-message-box.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], SendMessageBoxComponent);
    return SendMessageBoxComponent;
}());
export { SendMessageBoxComponent };
//# sourceMappingURL=send-message-box.component.js.map