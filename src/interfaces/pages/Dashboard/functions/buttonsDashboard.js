import { edit, close, pay } from "../../../../assets/variables";
import {SignOut} from './signOut'
export const buttonsDashboard = [
  {
    id: 1,
    to: "/payments",
    title: "Payments",
    src: pay,
    alt: "button payments",
  },
  {
    id: 2,
    to: "/edit-profile-user",
    title: "Edit your profile",
    src: edit,
    alt: "Edit",
  },
  { id: 3, onClick: SignOut, title: "Close session", src: close, alt: "Close" },
];
