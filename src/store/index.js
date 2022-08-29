import { profileReducer } from "./reducer";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { chatsReducer } from "./chatsReducer";
import { messageReducer } from "./messageReducer";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { duneReducer } from "./duneReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  profile: profileReducer,
  chat: chatsReducer,
  message: messageReducer,
  dune: duneReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
export { store };
