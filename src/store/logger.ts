/* eslint-disable no-console */
const logger = (store: { getState: () => any; }) => (next: (arg0: any) => any) => (action: { type: any; }) => {
	console.group(action.type);
	console.info("dispatching", action);
	const result = next(action);
	console.log("next state", store.getState());
	console.groupEnd();
	return result;
};
  
export default logger;