import React, { Component } from 'react';
import {connect} from 'react-redux';
import { BrowserRouter, Route,Redirect,Switch} from 'react-router-dom';
import login from './container/login/login.js'
import Dashboard from './Dashboard.js'
import {changeBg} from './redux/bg.redux';

@connect(
  state=>({num:state.bg}),
  {changeBg}
)

class App extends Component {
  // constructor(props){
  //   super(props)
  //   // this.bgColor= this.bgColor.bind(this)
  // }
  bgColor(){
    let img = require(`./images/wallpaper${this.props.num}.jpg`)
    return  {backgroundImage:`url(${img})`}
  }
  render(props) {
    return (
      <div className="ark">
        <BrowserRouter>
          <Switch>
              <Route path="/login" exact component={login}></Route>
              <Route path="/dashboard" component={Dashboard}></Route>
              <Redirect to="/dashboard"></Redirect>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;

