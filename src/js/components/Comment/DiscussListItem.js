import React, { Component } from 'react';
//导入评论组件
import CommentForm from './CommentForm';

//导入图片组件
import DiscussListImgs from './DiscussListImgs';

/**
 * 讨论区评论列表组件
 */
class DiscussListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //是否点击评论按钮标志
      isComment: false,
      //默认的条目数据
      itemData: this.props.itemData,
      //默认的点赞数
      zanNum: this.props.itemData.NoCollect
    }
  }
  //渲染界面
  render() {
    let data = this.props.itemData;
    return (
      <div>
        {this._renderHeadView(data)}

        <hr className='hrStyle' />

        {this._renderFooterView(data)}
        {/* 点击评论按钮 则展开评论组件，否则隐藏  新添加的方法*/}
        {this.state.isComment ? <CommentForm /> : null}
      </div>
    );
  }

  /**
   * 渲染顶部View
   */
  _renderHeadView(data) {
    return (
      <div className='item'>
        {/* <img src={data.headUrl} alt='headPic' className='imgStyle' /> */}
        <img src={require('../../../images/h-02.jpg')} className='imgStyle'></img>
        <div className='topRightView'>
          <div className='nickNameAndSendTime'>
            <span>{data.nickName}</span>
            <span>{data.sendTime}</span>
          </div>

          <p className='dis-content'>{data.content}</p>

          {data.contentImgUrls ? <DiscussListImgs imgUrls={data.contentImgUrls} /> : null}
        </div>
      </div>
    )
  }

  /**
   * 渲染底部View
   */
  _renderFooterView(data) {
    return (
      <div className='commentViewStyle'>
        <ul className='ulStyle'>
          {/* 此处新增方法 */}
          <li className='liStyle' onClick={this._dianzan.bind(this)}>点赞:{this.state.zanNum}</li><div className='shuxian'></div>
          <li className='liStyle' onClick={this._comment.bind(this)}>评论:{data.NoComment}</li><div className='shuxian'></div>
          <li className='liStyle' onClick={this._zhuanFa.bind(this)}>转发:{data.NoPointGreat}</li>
        </ul>
      </div>
    );
  }

  /**
   * 评论方法
   */
  _comment() {
    this.setState({
      isComment: true
    })
  }
  /**
   * 点赞方法
   */
  _dianzan() {
    this.setState({
      isComment: false,
      zanNum: parseInt(this.state.zanNum) + 1,
    })
  }
  /**
   * 转发方法
   */
  _zhuanFa() {
    this.setState({
      isComment: false
    })
  }
}

export default DiscussListItem 