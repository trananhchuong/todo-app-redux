import { createStore } from "redux";
// import rootReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducer/rootReducer";

const composedEnhancers = composeWithDevTools();
const store = createStore(rootReducer, composedEnhancers);

export default store;
