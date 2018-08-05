import React, { Component } from 'react'
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

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
        <SubMenu title={<span><Icon type="setting" />设置</span>}>
          <MenuItemGroup title="Item 1">
            <Menu.Item key="setting:1">选项1</Menu.Item>
            <Menu.Item key="setting:2">选项2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <Menu.Item key="setting:3">选项3</Menu.Item>
            <Menu.Item key="setting:4">选项4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          测试
        </Menu.Item>
      </Menu>
    )
  }
}

export default home