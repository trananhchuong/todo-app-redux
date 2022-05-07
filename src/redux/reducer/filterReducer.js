import { TODO_LIST_FILTER_TYPE } from "../actions";

const initState = {
  search: "",
  status: "All",
  // priority: ["All", "Low", "Medium", "High"],
  priority: [],
};

const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case TODO_LIST_FILTER_TYPE.SEARCH:
      return {
        ...state,
        search: action?.payload,
      };
    case TODO_LIST_FILTER_TYPE.SET_STATUS:
      return {
        ...state,
        status: action?.payload,
      };
    case TODO_LIST_FILTER_TYPE.SET_PRIORITY:
      return {
        ...state.filters,
        priority: action?.payload,
      };

    default:
      return state;
  }
};

export default filterReducer;
