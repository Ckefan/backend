import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
/*createStore 生成新的store对象；
    applyMiddlewere 对redux的dispacth 方法进行封装； 
    compose 当需要把多个 store 增强器 依次执行的时候
*/
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route,Redirect,Switch} from 'react-router-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


import reducers from './reducer.js'
import Auth from './Auth.js'
import Dashboard from './Dashboard.js'

const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))
console.log(store.getState())
ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/login" exact component={Auth}></Route>
                <Route path="/dashboard" component={Dashboard}></Route>
                <Redirect to="/dashboard"></Redirect>
            </Switch> 
        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
);


registerServiceWorker();
