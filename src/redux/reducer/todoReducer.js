import { TODO_LIST_TYPE } from "../actions";

const initState = [
  { id: 1, name: "learn html", priority: "High", completed: true },
  { id: 2, name: "learn javascript", priority: "Medium", completed: false },
  { id: 3, name: "learn Reactjs", priority: "Low", completed: true },
];

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case TODO_LIST_TYPE.ADD_TODO:
      return [...state, action?.payload?.data];

    case TODO_LIST_TYPE.TOGGLE_STATUS:
      const todoListNew = state.map((todo) => {
        if (todo.id === action?.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });

      return todoListNew;

    default:
      return state;
  }
};

export default todoReducer;
