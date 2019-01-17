import { SET_TYPING_VALUE, ADD_USER_MESSAGE } from "../constants/action-types";


export default (state = "", action) => {
	switch (action.type) {
		case SET_TYPING_VALUE:
			return action.payload;
		case ADD_USER_MESSAGE:
			return "";
		default:
			return state;
	}
}