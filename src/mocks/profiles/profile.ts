import { Profile } from "../../models/profiles/profile.interface";

const usersList: Profile[] = [
  {
    firstName: "Holga",
    lastName: "Fetter",
    email: "holga@gmail.com",
    avatar: "assets/imgs/avatar.jpg",
    dateOfBirth: new Date()
  },
  {
    firstName: "Gustavo",
    lastName: "Silva",
    email: "gustavo@gmail.com",
    avatar: "assets/imgs/avatar.jpg",
    dateOfBirth: new Date()
  },
  {
    firstName: "Junior",
    lastName: "Silveira",
    email: "junior@hotmail.com",
    avatar: "assets/imgs/avatar.jpg",
    dateOfBirth: new Date()
  },
  {
    firstName: "Leon",
    lastName: "Mark",
    email: "leon@hotmail.com",
    avatar: "assets/imgs/avatar.jpg",
    dateOfBirth: new Date()
  }
];

export const USER_LIST = usersList;
