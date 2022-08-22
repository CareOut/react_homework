import { profileReducer } from "./reducer";
import { createStore } from "redux";

const store = createStore(profileReducer);

export { store };
