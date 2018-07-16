import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import {Login} from '../../Auth.redux'
import { Form, Icon, Input, Button,Row, Col } from 'antd'
import './login.sass';

const FormItem = Form.Item;
@connect(
  state=>state.auth,
  {Login}
)
class login extends Component {
  render() {
    return (
      <Row type="flex" justify="center" align="middle"> 
        <Col>
          <div className="login">
            {this.props.isAuth?<Redirect to='/dashboard'/>:null}
                <div className="loginbox">
                  <Form className="login-form">
                    <FormItem>
                      <Input prefix={<Icon type="user" style={{color:'rgba(0,0,0,0.25)'}}/>} placeholder="Username"/>
                    </FormItem>
                    <FormItem>
                      <Input prefix={<Icon type="user" style={{color:'rgba(0,0,0,0.25)'}}/>} placeholder="Password"/>
                    </FormItem>
                    <FormItem>
                      <Button type="primary" htmlType="submit" onClick={this.props.Login}>登录</Button>
                    </FormItem>
                  </Form>
                </div>
              
          </div>
        </Col>
      </Row>
    );
  }
}

export default login 