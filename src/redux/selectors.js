export const getToDoList = (state) => state?.todoList;

export const getToDoListBySearchText = (state) => {
  return state?.todoList?.filter((todo) => {
    const querySearchText = todo.name.includes(state?.filters?.search);
    const checkStatus =
      state?.filters?.status === "Completed" ? todo.completed : !todo.completed;
    const queryStatus = state?.filters?.status === "All" ? true : checkStatus;

    return querySearchText && queryStatus;
  });
};

export const getFilterSearch = (state) => state?.filters?.search;
