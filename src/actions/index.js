import { SET_ACTIVE_USER_ID, SET_TYPING_VALUE, ADD_USER_MESSAGE } from "../constants/action-types";

export const setActiveUserId = id => ({
	 type: SET_ACTIVE_USER_ID,
	 payload: id
});

export const setTypingValue = text => ({
	type: SET_TYPING_VALUE,
	payload: text
});

export const addUserMessage = (message, activeUserId) => ({
	type: ADD_USER_MESSAGE,
	payload: {
		message,
		activeUserId
	}
})