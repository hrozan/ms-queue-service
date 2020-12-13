// import { api } from '../api';
import { SET_TODOS, TODOS_LOADED } from '../../actions/actionsTypes';

const todos: Array<any> = [];

export const todosReducer = (state = todos, action: any) => {
  switch (action.type) {
    case SET_TODOS:
      return {
        ...state,
        todos: action.payload,
      }
    default:
      return state
  }
}

export const fetchTodos = async (dispatch: any, getState: any) => {
  // const res = await api.get('/fake/api');
  // dispatch({
  //   type: TODOS_LOADED,
  //   payload: res.todos
  // })
}