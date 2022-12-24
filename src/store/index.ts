import { configureStore } from "@reduxjs/toolkit";
import Promise from "redux-promise-middleware";
import loggerMiddleware from "./logger";
import rootReducer from "./reducers";

export default function configureAppStore() {
	const store = configureStore({
		reducer: rootReducer,
		middleware: [loggerMiddleware, Promise]
	});

	return store;
}