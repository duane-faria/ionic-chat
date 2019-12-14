import { USER_LIST } from "../profiles/profile";
import { Message } from "../../models/message/message.interface";

const usersList = USER_LIST;

const messageList: Message[] = [];

usersList.forEach(user => {
  messageList.push({ user: user, date: new Date(), lastMessage: "Olá" });
  messageList.push({ user: user, date: new Date(), lastMessage: "Olá" });
  messageList.push({ user: user, date: new Date(), lastMessage: "Olá" });
});

export const MESSAGE_LIST = messageList;
