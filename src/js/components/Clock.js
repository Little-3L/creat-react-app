import React, { Component } from 'react'

class Clock extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      h: 0,
      m: 0,
      s: 0,
    };

    var _this = this;

    setInterval(function () {
      _this.fn();
    }, 1000);
  }

  componentDidMount() {
    this.fn()
  }

  fn() {
    var data = new Date();
    this.setState({
      h: data.getHours(),
      m: data.getMinutes(),
      s: data.getSeconds(),
    });
  }

  render() {
    return (
      <div>
        {this.state.h}:{this.state.m}:{this.state.s}
      </div>)
  }
}

export default Clock