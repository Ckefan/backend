import React, { Component } from 'react';
import {connect} from 'react-redux';
import { BrowserRouter, Route,Redirect,Switch} from 'react-router-dom';
import login from './container/login/login.js'
import home from './container/home/home'
import {changeBg} from './redux/bg.redux';

@connect(
  state=>({num:state.bg}),
  {changeBg}
)

class App extends Component {
  render() {
    let img = require(`./images/wallpaper${this.props.num}.jpg`);
    document.body.style.backgroundImage=`url(${img})`;
    return (
      <div className="ark">
        <BrowserRouter>
          <Switch>
              <Route path="/login" exact component={login}></Route>
              <Route path="/home" component={home}></Route>
              <Redirect to="/home"></Redirect>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;

