import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { Users } from "../../dummyData";
import { useParams } from 'react-router-dom';

export default function Profile() {
  const id = parseInt(useParams().id);

    const user = Users.filter(user => user.id === id)[0];  
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={"/assets/post/"+user.profileCoverPicture}
                alt=""
              />
              <img
                className="profileUserImg"
                src={"/assets/person/"+user.profilePicture}
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Safak Kocaoglu</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed profile={1}/>
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}
