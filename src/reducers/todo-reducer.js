import {actionTypes} from '../constants';


const todoReducer = (state = {}, action) => {
    switch(action.type) {
        case actionTypes.GET_TODOS:
            return {
                ...state,
                todos: action.todos
            }
        case actionTypes.ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case actionTypes.UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id !== action.payload.id) {
                        return todo;
                    };
                    return action.payload;
                })
            }
        case actionTypes.DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload.id)
            }
        default:
            return state
    }
};

export default todoReducer;
