export const addTodo = (data) => {
  return {
    type: TODO_LIST_TYPE.ADD_TODO,
    payload: data,
  };
};

export const setSearchTextFilter = (text) => {
  return {
    type: TODO_LIST_FILTER_TYPE.SEARCH,
    payload: text,
  };
};

export const setStatusFilter = (status) => {
  return {
    type: TODO_LIST_FILTER_TYPE.SET_STATUS,
    payload: status,
  };
};

export const setPriorityFilter = (priority) => {
  return {
    type: TODO_LIST_FILTER_TYPE.SET_PRIORITY,
    payload: priority,
  };
};

export const TODO_LIST_TYPE = {
  ADD_TODO: "todoList/addTodo",
};

export const TODO_LIST_FILTER_TYPE = {
  SEARCH: "todoListFilter/searchFilterChange",
  SET_STATUS: "todoListFilter/setStatusFilter",
  SET_PRIORITY: "todoListFilter/setPriorityFilter",

};
