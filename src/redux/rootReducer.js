import { combineReducers } from "redux";
import { pointReducer } from "./pointReducer";
import { historyReducer } from "./historyReducer";

export const rootReducer = combineReducers({
   pointReducer,
   historyReducer
});