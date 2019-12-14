import { USER_LIST } from "../profiles/profile";
var usersList = USER_LIST;
var messageList = [];
usersList.forEach(function (user) {
    messageList.push({ user: user, date: new Date(), lastMessage: "Olá" });
    messageList.push({ user: user, date: new Date(), lastMessage: "Olá" });
    messageList.push({ user: user, date: new Date(), lastMessage: "Olá" });
});
export var MESSAGE_LIST = messageList;
//# sourceMappingURL=messages.js.map