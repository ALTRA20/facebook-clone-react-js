import React from "react";
import "./accountSmCard.css"
import {AiOutlineClose} from "react-icons/ai";

export default function AccountSmCard(props){
	return(
		<div className="accountSmCard">
			<AiOutlineClose className="accountSmCardClose" onClick={()=>props.statusOn(!props.statusOn)}/>
			<div className="accountSmCardTop">
				<img src="assets/person/1.jpeg" alt="" className="accountSmCardPhoto"/>
				<span className="accountSmCardInfoAccount">
					<h5 className="accountSmCardTopName">Aldo Cahaya Putra</h5>
					<a href="/profile" className="accountSmCardTopBtnEdit btn">Edit Profile</a>
				</span>
			</div>
			<button className="accountSmCardBtnLogout btn">Logout</button>
		</div>
	)
}