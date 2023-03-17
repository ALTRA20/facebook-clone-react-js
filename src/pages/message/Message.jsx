import React from "react";
import "./message.css";
import { FiMoreVertical } from "react-icons/fi";
import { AiOutlineArrowLeft } from "react-icons/ai";

import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Massage(){
	return(
		<>
			<Topbar/>
			<div className="messageContainer">
				<Sidebar/>
				<div className="message">
					<div className="messageWrapper">
						<div className="messageTop">
							<span className="messageTopLeft">
								<AiOutlineArrowLeft className="leftIcon"/>
								<h1 className="messageTopTitle">Message</h1>
							</span>
							<span className="messageTopRight">
								<span>Flter</span>
								<FiMoreVertical className="messageTopOptions"/>
							</span>
						</div>
					</div>	
				</div>
			</div>
		</>
	)
}