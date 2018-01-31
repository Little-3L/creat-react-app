import React, { Component } from 'react';

//导入讨论区列表组件
import DiscussListItem from './DiscussListItem'

//定义一个讨论列表组件
class DiscussList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //遍历渲染每个条目
    var ItemView = this.props.data.map(function (item, index) {
      return <DiscussListItem itemData={item} key={index} />
    });

    return (
      <div className='listRootViewStyle'>
        {ItemView}
      </div>
    );
  }
}

export default DiscussList
