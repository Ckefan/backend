import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Icon, Input, Button } from 'antd'
import './login.stylus'

const FormItem = Form.Item;

class login extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="login">
        <div className="loginbox">
          <Form className="login-form">
            <FormItem>
              <Input prefix={<Icon type="user" style={{color:'rgba(0,0,0,0.25)'}}/>} placeholder="Username"/>
            </FormItem>
            <FormItem>
              <Input prefix={<Icon type="user" style={{color:'rgba(0,0,0,0.25)'}}/>} placeholder="Password"/>
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit">登录</Button>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}

export default login 