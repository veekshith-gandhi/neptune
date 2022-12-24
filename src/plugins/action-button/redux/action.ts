import events from "./events";

export const triggerActionButton = () => ({
	type: events.TRIGGER_ACTION_BUTTON,
	payload: {}
});

export const clearTriggerActionButton = () => ({
	type: events.CLEAR_TRIGGER_ACTION_BUTTON,
	payload: {}
});