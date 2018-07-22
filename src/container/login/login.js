import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import {Login,Register} from '../../Auth.redux'
import { Form, Icon, Input, Button,Row, Col } from 'antd'
import './login.scss';

const FormItem = Form.Item;
@connect(
  state=>state.auth,
  {Login,Register}
)
class login extends Component {
  constructor(props){
    super(props)
    this.userImg = require("../../images/user.jpg")
  }
  render() {
    return (
      <Row type="flex" justify="center" align="middle"> 
        <Col>
          <div className="login">
            {this.props.isAuth?<Redirect to='/dashboard'/>:null}
            <div className="user">
              <div className="user-border">
                <img className="user-img" src={this.userImg} alt="头像" />
              </div> 
            </div> 
            <div className="loginbox">
              <Form className="login-form">
                <FormItem>
                  <Input prefix={<Icon type="user" style={{color:'rgba(0,0,0,0.25)'}}/>} placeholder="Username"/>
                </FormItem>
                <FormItem>
                  <Input prefix={<Icon type="lock" style={{color:'rgba(0,0,0,0.25)'}}/>} type="password" placeholder="Password"/>
                </FormItem>
                <FormItem>
                  <Row type="flex" justify="space-between" align="top">
                    <Col>
                      <Button className="btn"  htmlType="submit" onClick={this.props.Login}>登录</Button>
                    </Col>
                    <Col>
                      <Button className="btn" htmlType="submit" onClick={this.props.Register}>注册</Button>
                    </Col>
                  </Row>
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