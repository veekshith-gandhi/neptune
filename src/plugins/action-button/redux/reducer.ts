import events from "./events";
import { ActionBtnReducer } from "./model";
import { Action } from "../../../model";

const initialState: ActionBtnReducer = {
	actionTriggered: false
};

export default (state: ActionBtnReducer = initialState, action: Action): ActionBtnReducer => {
	switch (action.type) {
		case events.TRIGGER_ACTION_BUTTON:
			return {
				...state,
				actionTriggered: true
			};
		case events.CLEAR_TRIGGER_ACTION_BUTTON:
			return {
				...state,
				actionTriggered: false
			};
		default:
			return state;
	}
};