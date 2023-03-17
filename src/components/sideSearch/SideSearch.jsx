import React from "react";
import "./sideSearch.css"
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";

export default function SideSearch(props){
	return(
		<div className="sideSearch">
			<div className="sideSearchWrapper">
				<div className="sidebarSmTop">
		          <AiOutlineArrowLeft className="leftIcon" onClick={()=>props.sideSearchValue(!props.sideSearchValue)}/>
		          <div className="searchbarSm">
		            <BiSearchAlt2 className="searchIconSm"/>
		            <input
		              placeholder="Search for friend, post or video"
		              className="searchInputSm"
		            />
		          </div>
		        </div>
				<ul className="sideSearchResult">
					{Users.map((u) => (
			          <CloseFriend key={u.id} user={u} />
			        ))}
				</ul>
			</div>
		</div>
	)
}