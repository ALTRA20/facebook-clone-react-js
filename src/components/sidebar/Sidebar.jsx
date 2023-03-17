import "./sidebar.css";
import { MdOutlineRssFeed, MdOutlineWorkOutline } from "react-icons/md";
import { BsBookmarkFill, BsCalendar2Event, BsFillChatLeftTextFill, BsChevronDoubleDown } from "react-icons/bs";
import { AiFillQuestionCircle, AiFillPlayCircle, AiFillHome } from "react-icons/ai";
import { IoIosSchool } from 'react-icons/io';
import { FaUserFriends, FaCircle } from "react-icons/fa";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";

export default function Sidebar() {

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <a href="/">
              <AiFillHome className="sidebarIcon" />
              <span className="sidebarListItemText">Dashboard</span>
            </a>
          </li>
          <li className="sidebarListItem">
            <a href="">
              <MdOutlineRssFeed className="sidebarIcon" />
              <span className="sidebarListItemText">Feed</span>
            </a>
          </li>
          <li className="sidebarListItem">
            <a href="">
              <BsFillChatLeftTextFill className="sidebarIcon" />
              <span className="sidebarListItemText">Chats</span>
            </a>
          </li>
          <li className="sidebarListItem">
            <a href="">
              <AiFillPlayCircle className="sidebarIcon" />
              <span className="sidebarListItemText">Videos</span>
            </a>
          </li>
          <li className="sidebarListItem">
            <a href="">
              <FaUserFriends className="sidebarIcon" />
              <span className="sidebarListItemText">Groups</span>
            </a>
          </li>
          <li className="sidebarListItem">
            <a href="">
              <BsBookmarkFill className="sidebarIcon" />
              <span className="sidebarListItemText">Bookmarks</span>
            </a>
          </li>
          <li className="sidebarListItem">
            <a href="">
              <AiFillQuestionCircle className="sidebarIcon" />
              <span className="sidebarListItemText">Questions</span>
            </a>
          </li>
          <li className="sidebarListItem">
            <a href="">
              <MdOutlineWorkOutline className="sidebarIcon" />
              <span className="sidebarListItemText">Jobs</span>
            </a>
          </li>
          <li className="sidebarListItem">
            <a href="">
              <BsCalendar2Event className="sidebarIcon" />
              <span className="sidebarListItemText">Events</span>
            </a>
          </li>
          <li className="sidebarListItem">
            <a href="">
              <IoIosSchool className="sidebarIcon" />
              <span className="sidebarListItemText">Courses</span>
            </a>
          </li>
        </ul>
        <button className="sidebarButton"><BsChevronDoubleDown/>Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
