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
    case TODO_LIST_FILTER_TYPE.SET_STATUS:
      return {
        ...state,
        filters: {
          ...state.filters,
          status: action?.payload,
        },
      };
    case TODO_LIST_FILTER_TYPE.SET_PRIORITY:
      return {
        ...state,
        filters: {
          ...state.filters,
          priority: action?.payload,
        },
      };
    case TODO_LIST_TYPE.TOGGLE_STATUS:
      const todoListNew = state.todoList.map((todo) => {
        if (todo.id === action?.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });

      return {
        ...state,
        todoList: todoListNew,
      };

    default:
      return state;
  }
};

export default rootReducer;
