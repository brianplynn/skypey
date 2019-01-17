import React from "react";
import ChatWindow from "../containers/ChatWindow.js";
import Empty from "./Empty.js";
import "./Main.css";

const Main = ({ user, activeUserId }) => {
	
	return (
		 <main className="Main">
		 	{ activeUserId ? <ChatWindow activeUserId={activeUserId} />
		 					: <Empty user={user} 
		 							 activeUserId={activeUserId} />
		 	}
		 </main>
	);
}

export default Main;