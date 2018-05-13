import React, { Component } from 'react';
import { Button } from 'antd';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.count = 0
  }
  render(props) {
    return (
      <div className="App">
        <span>{this.count}</span>
        <Button type="primary" onClick={() => this.addSolder()}>添加</Button>
      </div>
    );
  }
  addSolder(props) {
    let count = this.count++;
    this.setState({ count });
  }
}

export default App;
