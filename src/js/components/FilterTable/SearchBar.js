import React, { Component } from "react"

//接收用户输入的组件
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  //输入框改变或者复选框改变 调用父组件的方法,传递需要改变state的参数
  handleChange = () => {
    this.props.onUserInput(
      this.refs.filterTextInput.value,
      this.refs.finishedOnlyInput.checked,
      this.refs.GtypeInput.checked,
    );
  }

  render() {
    return (
      <form>
        <input
          className='textName'
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          ref="filterTextInput"
          onChange={this.handleChange}
        />
        <p>
          <input
            type="checkbox"
            className='box1'
            checked={this.props.finishedOnly}
            ref="finishedOnlyInput"
            onChange={this.handleChange}
          />
          {' '}
          只显示已完结动漫
          <input
            type="checkbox"
            className='box2'
            checked={this.props.Gtype}
            ref="GtypeInput"
            onChange={this.handleChange}
          />
          {' '}
          只显示国漫
        </p>
      </form>
    )
  }
}

export default SearchBar