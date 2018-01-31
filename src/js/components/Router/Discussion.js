import React, { Component } from 'react';

//引入讨论区列表组件
import DiscussList from '../Comment/DiscussList';
//导入数据
import datas from '../../../data/data.json';
import '../../../css/components/Comment.css'

//渲染讨论区列表 并且把数据 通过props传递到 DiscussList中
class Discussion extends Component {
  render() {
    return (
      <div>
        <DiscussList data={datas.data} />
      </div>
    );
  }
}

export default Discussion