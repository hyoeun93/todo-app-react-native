import { LOAD_TODOS, ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions/actionTypes'
import update from 'immutability-helper'

const initialState = { 
    todos: [],
};

export default function todoReducer(state=initialState, action) {
    switch(action.type) {
        case LOAD_TODOS: 
        console.log('reducer', action.payload)
            return {todos: action.payload};

        case ADD_TODO: 
            return update(state, {
                todos: {$push: [{id: action.id, title: action.title, done: false}]}
            });

        case TOGGLE_TODO:
            const todoIndex = state.todos.findIndex(todo => todo.id === action.index)
            const todo = state.todos[todoIndex]
            const newTodo = update(todo, {
                done: {$set: !todo.done}
            })
            return update(state, {
                todos: {$splice: [[todoIndex, 1, newTodo]]}
            })


        case DELETE_TODO:
            const deleteTodoIndex = state.todos.findIndex(todo => todo.id == action.index)
            return update(state, {
                todos: {$splice: [[deleteTodoIndex, 1]]}
            })
        default:
            return state;
    }
}