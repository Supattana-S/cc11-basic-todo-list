// Action TYPE
// 1. CREATE_TODO
// 2. DELETE_TODO
// 3. TOGGLE_TODO_STATUS
// 4. UPDATE_TODO_STATUS
// 5. CHANGE_SEARCH_TERM
// 6. CHANGE_SEARCH_STATUS
// 7. FETCH_TODOS

export const CREATE_TODO = "CREATE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO_STATUS = "TOGGLE_TODO_STATUS";
export const UPDATE_TODO_STATUS = "UPDATE_TODO_STATUS";
export const CHANGE_SEARCH_TERM = "CHANGE_SEARCH_TERM";
export const CHANGE_SEARCH_STATUS = "CHANGE_SEARCH_STATUS";
export const FETCH_TODOS = "FETCH_TODOS";

export const INITIAL_TODO_LIST = {
  todoList: [],
  searchTerm: "",
  searchStatus: null,
};

export function todoListReducer(state, action) {
  switch (action.type) {
    case FETCH_TODOS: {
      return { ...state, todoList: action.value };
    }
    case CREATE_TODO: {
      return { ...state, todoList: [action.value, ...state.todoList] };
    }
    case DELETE_TODO: {
      const idx = state.todoList.findIndex((el) => el.id === action.id);
      const cloneTodoList = [...state.todoList];
      cloneTodoList.splice(idx, 1);
      return { ...state, todoList: cloneTodoList };
    }
  }
}
