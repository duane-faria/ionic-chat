import { Profile } from "../profiles/profile.interface";
export interface Message {
  user: Profile;
  date: Date;
  lastMessage: string;
}
