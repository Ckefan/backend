import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Menu, Icon } from 'antd';

import login from './container/login/login.js'
import home from './container/home/home'
import { changeBg } from './redux/bg.redux';

const SubMenu = Menu.SubMenu;

@connect(
  state => ({ num: state.bg }),
  { changeBg }
)

class App extends Component {
  state = {
    current: "mail",
  }
  handleClick = (e) => {
    console.log('click', e);
    this.setState({
      current: e.key,
    })
  }
  render() {
    let img = require(`./images/wallpaper${this.props.num}.jpg`);
    document.body.style.backgroundImage = `url(${img})`;
    return (
      <div className="ark">
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
        <BrowserRouter>
          <Switch>
            <Route path="/manager/login" exact component={login}></Route>
            <Route path="/manager/home" component={home}></Route>
            <Redirect to="manager/login"></Redirect>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;

