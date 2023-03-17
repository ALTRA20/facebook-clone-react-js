import "./sidebarSmallScreen.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdOutlineRssFeed, MdOutlineWorkOutline } from "react-icons/md";
import { BsBookmarkFill, BsCalendar2Event, BsFillChatLeftTextFill, BsChevronDoubleDown } from "react-icons/bs";
import { AiFillQuestionCircle, AiFillPlayCircle, AiOutlineArrowLeft } from "react-icons/ai";
import { IoIosSchool } from 'react-icons/io';
import { FaUserFriends, FaCircle } from "react-icons/fa";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";

export default function SidebarSmallScreen(props) {

  return (
    <div className="sidebarSm">
      <div className="sidebarSmWrapper">
        <div className="sidebarSmTop">
          <AiOutlineArrowLeft className="leftIcon" onClick={()=>props.sidebarSSValue(!props.sidebarSSValue)}/>
          <div className="searchbarSm">
            <BiSearchAlt2 className="searchIconSm"/>
            <input
              placeholder="Search for friend, post or video"
              className="searchInputSm"
            />
          </div>
        </div>
        <ul className="sidebarSmList">
          <li className="sidebarSmListItem">
            <a href="">
              <MdOutlineRssFeed className="sidebarSmIcon" />
              <span className="sidebarSmListItemText">Feed</span>
            </a>
          </li>
          <li className="sidebarSmListItem">
            <a href="">
              <BsFillChatLeftTextFill className="sidebarSmIcon" />
              <span className="sidebarSmListItemText">Chats</span>
            </a>
          </li>
          <li className="sidebarSmListItem">
            <a href="">
              <AiFillPlayCircle className="sidebarSmIcon" />
              <span className="sidebarSmListItemText">Videos</span>
            </a>
          </li>
          <li className="sidebarSmListItem">
            <a href="">
              <FaUserFriends className="sidebarSmIcon" />
              <span className="sidebarSmListItemText">Groups</span>
            </a>
          </li>
          <li className="sidebarSmListItem">
            <a href="">
              <BsBookmarkFill className="sidebarSmIcon" />
              <span className="sidebarSmListItemText">Bookmarks</span>
            </a>
          </li>
          <li className="sidebarSmListItem">
            <a href="">
              <AiFillQuestionCircle className="sidebarSmIcon" />
              <span className="sidebarSmListItemText">Questions</span>
            </a>
          </li>
          <li className="sidebarSmListItem">
            <a href="">
              <MdOutlineWorkOutline className="sidebarSmIcon" />
              <span className="sidebarSmListItemText">Jobs</span>
            </a>
          </li>
          <li className="sidebarSmListItem">
            <a href="">
              <BsCalendar2Event className="sidebarSmIcon" />
              <span className="sidebarSmListItemText">Events</span>
            </a>
          </li>
          <li className="sidebarSmListItem">
            <a href="">
              <IoIosSchool className="sidebarSmIcon" />
              <span className="sidebarSmListItemText">Courses</span>
            </a>
          </li>
        </ul>
        <button className="sidebarSmButton"><BsChevronDoubleDown/>Show More</button>
      </div>
    </div>
  );
}
