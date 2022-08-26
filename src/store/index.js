import { profileReducer } from "./reducer";
import { combineReducers, createStore } from "redux";
import { chatsReducer } from "./chatsReducer";
import { messageReducer } from "./messageReducer";

const store = createStore(
  combineReducers({
    prodile: profileReducer,
    chat: chatsReducer,
    message: messageReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };
