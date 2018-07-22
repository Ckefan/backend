import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
/*createStore 生成新的store对象；
    applyMiddlewere 对redux的dispacth 方法进行封装； 
    compose 当需要把多个 store 增强器 依次执行的时候
*/
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import reducers from './reducer.js'
import Manager from './manager'



const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : f => f
))
ReactDOM.render(
	(<Provider store={store}>
		<Manager/>
	</Provider>),
	document.getElementById('root')
);


registerServiceWorker();
