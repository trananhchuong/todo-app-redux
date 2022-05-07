export const getToDoList = (state) => state?.todoList;

export const getToDoListBySearchText = (state) => {
  return state?.todoList?.filter((todo) => {
    return todo.name.includes(state?.filters?.search);
  });
};

export const getFilterSearch = (state) => state?.filters?.search;

