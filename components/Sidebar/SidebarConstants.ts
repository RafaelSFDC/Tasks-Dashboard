import { IoHome } from "react-icons/io5";
import { FaUsersCog } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { FaRegListAlt } from "react-icons/fa";
import { IoIosListBox } from "react-icons/io";
import { FaPeopleGroup } from "react-icons/fa6";
const sidebarConstants = [
  {
    name: "Home",
    path: "/",
    icon: IoHome,
  },
  {
    name: "Tasks",
    path: "/Tasks",
    icon: FaRegListAlt,
  },
  {
    name: "MyTaks",
    path: "/MyTaks",
    icon: IoIosListBox,
  },
  {
    name: "Finished",
    path: "/Finished",
    icon: BiTask,
  },
  {
    name: "Groups",
    path: "/Groups",
    icon: FaPeopleGroup,
  },
  {
    name: "Users",
    path: "/users",
    icon: FaUsersCog,
  },
];

export default sidebarConstants;
