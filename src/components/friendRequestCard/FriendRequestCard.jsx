import React from "react";
import "./friendRequestCard.css"
import {AiOutlineClose} from "react-icons/ai";

export default function FriendRequestCard(props){
	return(
		<div className="friendRequestCard">
			<div className="friendRequestCardTop">
				<h2 className="friendRequestCardTitle">Friend request</h2>
				<AiOutlineClose className="btnClose" onClick={() => props.statusOn(!props.statusOn)}/>
				<ul className="friendRequestCardList">
					<li className="friendRequestCardListItem">
						<img src="/assets/person/7.jpeg" alt="" className="friendRequestCardListImg"/>
						<div className="friendRequestCardListItemRight">
							<b className="friendRequestCardListItemName">J.F.Kanedy</b>
							<div className="friendRequestCardListItemOption">
								<button className="friendRequestCardListItemBtnAccept">Accept</button>
								<button className="friendRequestCardListItemBtnDecline">Decline</button>
							</div>
						</div>
					</li>
					<li className="friendRequestCardListItem">
						<img src="/assets/person/9.jpeg" alt="" className="friendRequestCardListImg"/>
						<div className="friendRequestCardListItemRight">
							<b className="friendRequestCardListItemName">Nikita Khrushchev</b>
							<div className="friendRequestCardListItemOption">
								<button className="friendRequestCardListItemBtnAccept">Accept</button>
								<button className="friendRequestCardListItemBtnDecline">Decline</button>
							</div>
						</div>
					</li>
					<li className="friendRequestCardListItem">
						<img src="/assets/person/9.jpeg" alt="" className="friendRequestCardListImg"/>
						<div className="friendRequestCardListItemRight">
							<b className="friendRequestCardListItemName">Nikita Khrushchev</b>
							<div className="friendRequestCardListItemOption">
								<button className="friendRequestCardListItemBtnAccept">Accept</button>
								<button className="friendRequestCardListItemBtnDecline">Decline</button>
							</div>
						</div>
					</li>
					<li className="friendRequestCardListItem">
						<img src="/assets/person/9.jpeg" alt="" className="friendRequestCardListImg"/>
						<div className="friendRequestCardListItemRight">
							<b className="friendRequestCardListItemName">Nikita Khrushchev</b>
							<div className="friendRequestCardListItemOption">
								<button className="friendRequestCardListItemBtnAccept">Accept</button>
								<button className="friendRequestCardListItemBtnDecline">Decline</button>
							</div>
						</div>
					</li>
					<li className="friendRequestCardListItem">
						<img src="/assets/person/9.jpeg" alt="" className="friendRequestCardListImg"/>
						<div className="friendRequestCardListItemRight">
							<b className="friendRequestCardListItemName">Nikita Khrushchev</b>
							<div className="friendRequestCardListItemOption">
								<button className="friendRequestCardListItemBtnAccept">Accept</button>
								<button className="friendRequestCardListItemBtnDecline">Decline</button>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<a href="/friendRequest" className="friendRequestCardReadMore">Read More</a>
		</div>
	)
}