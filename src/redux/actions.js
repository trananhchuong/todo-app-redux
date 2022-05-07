export const addTodo = (data) => {
    return {
        type: TODO_LIST_TYPE.ADD_TODO,
        payload: data,
    }
}

export const setSearchText = (text) => {
    return {
        type: TODO_LIST_FILTER_TYPE.SEARCH,
        payload: text,
    }
}

export const TODO_LIST_TYPE = {
    ADD_TODO: "todoList/addTodo",
}

export const TODO_LIST_FILTER_TYPE = {
    SEARCH: "todoListFilter/searchFilterChange",
}