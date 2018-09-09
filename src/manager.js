import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Menu, Icon } from 'antd';

import login from './container/login/login.js'
import home from './container/home/home'
import user from './container/user/user'

import { changeBg } from './redux/bg.redux';
import { Register } from './redux/Auth.redux'

const SubMenu = Menu.SubMenu;

@connect(
  state => ({ num: state.bg, isAuth: state.auth.isAuth }),
  { changeBg, Register }
)

class App extends Component {
  state = {
    current: "mail",
    routeDefault: '/login'
  }
  handleClick = (e) => {
    this.setState({
      current: e.key,
    })
    this.setState({
      routeDefault: `/manager/${e.key}`,
    })
    this.$http.get('/api/verify/logout').then(re => {
      let res = re.data;
      if (res.code === 1) {
        console.log(res.data);
      }
    })
    console.log(e, this.state)
  }
  render() {
    let img = require(`./images/wallpaper${this.props.num}.jpg`);
    document.body.style.backgroundImage = `url(${img})`;

    let menu = (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="home">
          <Icon type="mail" />主页
      </Menu.Item>
        <Menu.Item key="user">
          <Icon type="appstore" />用户列表
      </Menu.Item>
        <SubMenu title={<span><Icon type="setting" />界面配置</span>}>

          <Menu.Item key="homeSet">首页配置</Menu.Item>
          <Menu.Item key="shopSet">商品详情配置</Menu.Item>

        </SubMenu>
        <Menu.Item key="total">
          数据统计
      </Menu.Item>
      </Menu>
    )
    console.log(this.props)
    return (
      <div className="ark">
        {this.props.isAuth ? menu : null}
        <BrowserRouter>
          <Switch>
            <Route path="/login" exact component={login}></Route>
            <Route path="/manager/home" component={home}></Route>
            <Route path="/manager/user" component={user}></Route>
            <Redirect to={this.state.routeDefault}></Redirect>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;

