import React, { Component } from 'react';

/**
 * 微博列表中的图片 无状态的组件
 */
class DiscussListImgs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // 遍历图片并显示
    var imgs = this.props.imgUrls.map(function (imgurl, index) {
      return (
        <li key={index} className='liStyle'>
          <img src={require('../../../images/pic-03.jpg')}
            className='imgShow'></img>
        </li>);
    });
    return (
      <ul className='ulstyle'>
        {imgs}
      </ul>
    );
  }
}

export default DiscussListImgs