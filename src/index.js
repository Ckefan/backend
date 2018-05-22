import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './index.css';
import App from './login/login';
import registerServiceWorker from './registerServiceWorker';
import { counter } from './index.redux';

const store = createStore(counter, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))
function Erying() {
    return <h2>一营</h2>
}
function Qibinglian() {
    return <h2>骑兵连</h2>
}
ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                {/* <ul>
                    <li>
                        <Link to="/">一营</Link>
                    </li>
                    <li>
                        <Link to="/erying">二营</Link>
                    </li>
                    <li>
                        <Link to="/qibinglian">骑兵连</Link>
                    </li>
                </ul>
                <Route path="/" component={App}></Route>
                <Route path="/erying" component={Erying}></Route>
                <Route path="/qibinglian" component={Qibinglian}></Route> */}
                <App />
            </div>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
);


registerServiceWorker();