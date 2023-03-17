import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./friendRequest.css";




export default function FriendRequest() {

  return (
    <>
      <Topbar />
      <div className="FriendRequestContainer">
        <Sidebar />
        <div className="friendRequest">
          <div className="friendRequestTop">
            <h1 className="friendRequestTitle">Friend request</h1>
            <ul className="friendRequestList">
              <li className="friendRequestListItem">
                <span className="friendRequestListItemWrapper">
                  <img src="/assets/person/jfk.jpeg" alt="" className="friendRequestListImg"/>
                  <div className="friendRequestListItemRight">
                    <p className="friendRequestListItemName">J.F.Kanedy</p>
                    <div className="friendRequestListItemOption">
                      <button className="friendRequestListItemBtnAccept">Accept</button>
                      <button className="friendRequestListItemBtnDecline">Decline</button>
                    </div>
                  </div>
                </span>
              </li>
              <li className="friendRequestListItem">
                <span className="friendRequestListItemWrapper">
                  <img src="/assets/person/nk.jpeg" alt="" className="friendRequestListImg"/>
                  <div className="friendRequestListItemRight">
                    <p className="friendRequestListItemName">Nikita Khrushchev</p>
                    <div className="friendRequestListItemOption">
                      <button className="friendRequestListItemBtnAccept">Accept</button>
                      <button className="friendRequestListItemBtnDecline">Decline</button>
                    </div>
                  </div>
                </span>
              </li>
              <li className="friendRequestListItem">
                <span className="friendRequestListItemWrapper">
                  <img src="/assets/person/louis16.jpeg" alt="" className="friendRequestListImg"/>
                  <div className="friendRequestListItemRight">
                    <p className="friendRequestListItemName">King Louis XVI</p>
                    <div className="friendRequestListItemOption">
                      <button className="friendRequestListItemBtnAccept">Accept</button>
                      <button className="friendRequestListItemBtnDecline">Decline</button>
                    </div>
                  </div>
                </span>
              </li>
              <li className="friendRequestListItem">
                <span className="friendRequestListItemWrapper">
                  <img src="/assets/person/musolini.jpeg" alt="" className="friendRequestListImg"/>
                  <div className="friendRequestListItemRight">
                    <p className="friendRequestListItemName">Musolini</p>
                    <div className="friendRequestListItemOption">
                      <button className="friendRequestListItemBtnAccept">Accept</button>
                      <button className="friendRequestListItemBtnDecline">Decline</button>
                    </div>
                  </div>
                </span>
              </li>
              <li className="friendRequestListItem">
                <span className="friendRequestListItemWrapper">
                  <img src="/assets/person/stalin.jpeg" alt="" className="friendRequestListImg"/>
                  <div className="friendRequestListItemRight">
                    <p className="friendRequestListItemName">Stalin</p>
                    <div className="friendRequestListItemOption">
                      <button className="friendRequestListItemBtnAccept">Accept</button>
                      <button className="friendRequestListItemBtnDecline">Decline</button>
                    </div>
                  </div>
                </span>
              </li>
              <li className="friendRequestListItem">
                <span className="friendRequestListItemWrapper">
                  <img src="/assets/person/soeharto.jpeg" alt="" className="friendRequestListImg"/>
                  <div className="friendRequestListItemRight">
                    <p className="friendRequestListItemName">Soeharto</p>
                    <div className="friendRequestListItemOption">
                      <button className="friendRequestListItemBtnAccept">Accept</button>
                      <button className="friendRequestListItemBtnDecline">Decline</button>
                    </div>
                  </div>
                </span>
              </li>
              <li className="friendRequestListItem">
                <span className="friendRequestListItemWrapper">
                  <img src="/assets/person/baldwin4.jpeg" alt="" className="friendRequestListImg"/>
                  <div className="friendRequestListItemRight">
                    <p className="friendRequestListItemName">King Baldwin IV</p>
                    <div className="friendRequestListItemOption">
                      <button className="friendRequestListItemBtnAccept">Accept</button>
                      <button className="friendRequestListItemBtnDecline">Decline</button>
                    </div>
                  </div>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
