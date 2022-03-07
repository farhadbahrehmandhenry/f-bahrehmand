import { combineReducers } from "redux";
import powerReducer from "./power-reducer";
import channelReducer from "./channel-reducer"; 
import currentItemReducer from "./current-item-reducer";

const reducers = combineReducers({
  power: powerReducer,
  channel: channelReducer,
  currentItem: currentItemReducer,
});

export default reducers;