import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
  todoList: todoReducer,
  filters: filterReducer,
});

export default rootReducer;