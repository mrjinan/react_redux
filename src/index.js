import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './components/App';
import configureStore from './store/configureStore';
import {loadToDoList} from './actions/todoAction';

const store = configureStore();
store.dispatch(loadToDoList());
render(<Provider store={store}><Router>
    <Route path="/" component={App}>
    </Route>
</Router></Provider>, document.getElementById('app'));