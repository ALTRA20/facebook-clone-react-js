import "./topbar.css";
import {useState} from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import { BsFillPersonFill, BsFillChatLeftTextFill, BsFacebook } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import SidebarSmallScreen from "../sidebarSmallScreen/SidebarSmallScreen";
import SideSearch from "../sideSearch/SideSearch";
import AccountSmCard from "../accountSmCard/AccountSmCard";
import NotificationCard from "../notificationCard/NotificationCard";
import FriendRequestCard from "../friendRequestCard/FriendRequestCard";


export default function Topbar() {
  let [sidebarSmallScreen, setSidebarSmallScreen] = useState(false);
  let [sideSearch, setSideSearch] = useState(false);
  let [accountSmCard, setAccountSmCard] = useState(false);
  let [notificationCard, setNotificationCard] = useState(false);
  let [friendRequestCard, setFriendRequestCard] = useState(false);

  const handleSidebarSmallScreen = () => { setSidebarSmallScreen(!sidebarSmallScreen); }
  const handleSideSearch = () => { setSideSearch(!sideSearch); }
  const handleAccountSmCard = () => { setAccountSmCard(!accountSmCard); }
  const handleNotificationCard = () => { setNotificationCard(!notificationCard); }
  const handleFriendRequestCard = () => { setFriendRequestCard(!friendRequestCard); }

  return (
    <>
    {friendRequestCard && <FriendRequestCard statusOn={setFriendRequestCard}/> }
    {notificationCard && <NotificationCard statusOn={setNotificationCard}/> }
    {accountSmCard && <AccountSmCard statusOn={setAccountSmCard}/> }
    {sideSearch && <SideSearch sideSearchValue={setSideSearch}/>}
    {sidebarSmallScreen && <SidebarSmallScreen sidebarSSValue={setSidebarSmallScreen}/>}
    <div className="topbarContainer">
      <div className="topbarLeft">
        <BsFacebook className="logo"/>
        <div className="searchbar" onClick={handleSideSearch}>
          <BiSearchAlt2 className="searchIcon"/>
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
        <GiHamburgerMenu className="hamburgerIcon" onClick={handleSidebarSmallScreen}/>
      </div>
      <div className="topbarCenter">
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem" onClick={handleFriendRequestCard}>
            <BsFillPersonFill />
            <span className="topbarIconBadge">1</span>
          </div>
          <a className="topbarIconItem" href="/message">
            <BsFillChatLeftTextFill />
            <span className="topbarIconBadge">2</span>
          </a>
          <div className="topbarIconItem" onClick={handleNotificationCard}>
            <IoIosNotifications/>
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg" onClick={handleAccountSmCard}/>
      </div>
    </div>
    </>
  );
}
