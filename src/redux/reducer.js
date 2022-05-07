import { TODO_LIST_TYPE, TODO_LIST_FILTER_TYPE } from "./actions";

const initState = {
  filters: {
    search: "",
    status: "All",
    // priority: ["All", "Low", "Medium", "High"],
    priority: [],
  },
  todoList: [
    { id: 1, name: "learn html", priority: "High", completed: true },
    { id: 2, name: "learn javascript", priority: "Medium", completed: false },
    { id: 3, name: "learn Reactjs", priority: "Low", completed: true },
  ],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case TODO_LIST_TYPE.ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action?.payload?.data],
      };
    case TODO_LIST_FILTER_TYPE.SEARCH:
      return {
        ...state,
        filters: {
          ...state.filters,
          search: action?.payload,
        },
      };

    default:
      return state;
  }
};

export default rootReducer;
