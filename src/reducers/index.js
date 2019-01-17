import user from "./user";
import contacts from "./contacts";
import messages from "./messages";
import typing from "./typing";
import activeUserId from "./activeUserId";
import { combineReducers } from "redux";

export default combineReducers({
	user,
	messages,
	typing,
	contacts,
	activeUserId
});