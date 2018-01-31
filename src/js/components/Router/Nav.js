import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../../../css/components/Nav.css'


class Nav extends Component {
  render() {
    return (
      <div>
        <ul className="header">
          <li><NavLink to='/home' exact activeClassName="active">首页</NavLink></li>
          <li><NavLink to='/search' activeClassName="active">搜索</NavLink></li>
          <li><NavLink to='/gate' activeClassName="active">传送门</NavLink></li>
          <li><NavLink to='/discussion' activeClassName="active">讨论区</NavLink></li>
        </ul>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
};
export default Nav