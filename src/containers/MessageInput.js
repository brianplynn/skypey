import React from "react";
import store from "../store";
import { setTypingValue, addUserMessage } from "../actions";
import "./MessageInput.css";

const MessageInput = ({ value }) => {
	const { activeUserId } = store.getState();
	const handleChange = (e) => {
		store.dispatch(setTypingValue(e.target.value));
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		const { typing, activeUserId } = store.getState();
		store.dispatch(addUserMessage(typing, activeUserId));
	}
	return (
		<form className="Message">
			<input
				className="Message__input"
				onChange={handleChange}
				onSubmit={handleSubmit}
				value={value}
				placeholder="write a message"
			/>
		</form>
	);
};
export default MessageInput;