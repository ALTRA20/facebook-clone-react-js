import React from "react";
import "./notificationCard.css";
import {AiOutlineClose} from "react-icons/ai";
import { Users, Comments } from "../../dummyData";

export default function NotificationCard(props){
    const comments = Comments.find((comment) => comment.userId === 1);
	return(
		<div className="notificationCard">
    {/*{comments.map((comment) => {

    	console.log(comments)
    })}*/}
			<div className="notificationCardTop">
				<h2 className="notificationCardTitle">Notification</h2>
				<AiOutlineClose className="btnClose" onClick={()=>props.statusOn(!props.statusOn)}/>
				<span className="notificationCardBtnAll btn active">All</span>
				<span className="notificationCardBtnUnread btn">Unread</span>
			</div>
			<ul className="notificationCardList">
				<div className="notificationCardListTop">
					<span className="notificationCardListTypeTitle">New</span>
					<span className="notificationCardListSeeAll">See All</span>
				</div>
			{Comments.map((comment) => {
        		const user = Users.find((user) => user.id === comment.userId);
        		return(
					<li className="notificationCardListItem" key={comment.id}>
						<img src={'/assets/person/' + user.profilePicture} alt="" className="notificationCardImg"/>
						<span className="notificationCardMain">
							<span className="notificationCardName">{user.username}</span>
							<span className="notificationCardDesc">{comment.comment}</span>
						</span>
					</li>
        		);
        	})}
			</ul>
		</div>
	)
}