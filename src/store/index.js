import { profileReducer } from "./reducers/reducer";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { chatsReducer } from "./reducers/chatsReducer";
import { messageReducer } from "./reducers/messageReducer";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { duneReducer } from "./reducers/duneReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  profile: profileReducer,
  chatList: chatsReducer,
  messages: messageReducer,
  dune: duneReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
export { store };
