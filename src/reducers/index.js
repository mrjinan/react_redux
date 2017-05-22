import {combineReducers} from 'redux';
import todoList from './toDoReducer';

const rootReducer = combineReducers({
    todoList /** Shorthand property name */
});
export default rootReducer;