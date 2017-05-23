import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import {Router, Route} from 'react-router';

import App from './components/App';
import configureStore from './store/configureStore';
import {loadToDoList} from './actions/todoAction';

console.log(loadToDoList)
const store = configureStore();
store.dispatch(loadToDoList());

render(<Provider store={store}><App /></Provider>, document.getElementById('app'));