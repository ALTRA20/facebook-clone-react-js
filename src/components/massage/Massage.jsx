import React from "react";
import "./massage.css";

export default function Massage(){
	return(
		<div className="message">
			<div className="messageWrapper">
				<div className="messageTop">
					<h1 className="messageTopTitle">Message</h1>
					<span className="messageTopOptions">...</span>
				</div>
			</div>	
		</div>
	)
}