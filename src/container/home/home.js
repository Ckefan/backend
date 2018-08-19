import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
import './home.scss';
const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

class home extends Component {
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
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="mail">
          <Icon type="mail" />主页
        </Menu.Item>
        <Menu.Item key="app">
          <Icon type="appstore" />用户列表
        </Menu.Item>
        <SubMenu title={<span><Icon type="setting" />界面配置</span>}>

          <Menu.Item key="setting:1">选项1</Menu.Item>
          <Menu.Item key="setting:2">选项2</Menu.Item>

        </SubMenu>
        <Menu.Item key="alipay">
          数据统计
        </Menu.Item>
      </Menu>
    )
  }
}

export default home