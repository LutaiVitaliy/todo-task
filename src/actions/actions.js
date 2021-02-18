import {getTodos, addTodo, updateTodo, deleteTodo} from '../services/todo-service';
import {actionTypes} from '../constants';

export const getTodosAction = () => {
    return dispatch => {
        getTodos()
        .then(response => {dispatch({
            type: actionTypes.GET_TODOS,
            todos: response
        })});
    };
};

export const addTodoAction = value => {
    return dispatch => {
        addTodo(value)
        .then(response => {dispatch({
            type: actionTypes.ADD_TODO,
            payload: response
        })});
    };
};

export const updateTodoAction = (id, data) => {
    return dispatch => {
        updateTodo(id, data)
        .then(response => {dispatch({
            type: actionTypes.UPDATE_TODO,
            payload: response
        })});
    };
};

export const deleteTodoAction = id => {
    return dispatch => {
        deleteTodo(id)
        .then(response => {dispatch({
            type: actionTypes.DELETE_TODO,
            payload: response
        })})
    }
};
