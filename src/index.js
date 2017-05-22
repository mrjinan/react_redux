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

render(<Provider store={store}>
        <Router>
        <Route path="/" component={App}/>
    </Router>

</Provider>, document.getElementById('app'));