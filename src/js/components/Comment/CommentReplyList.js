import React, { Component } from 'react';

/**
 * 评论列表组件
 */
class CommentReplyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 回复列表
      data: this.props.reply
    }
  }

  render() {
    let replyContent = this.state.data;
    return (
      <div className='commentListStyle'>
        <img src={require('../../../images/h-03.jpg')} className='img' />
        <div className='commentContentStyle'>
          <div className='nickNameStyle'>
            <span className='con-name'>{replyContent.name}</span>
            <span className='content'>{replyContent.content}</span>
          </div>
          <span className='timeSize'>{replyContent.time}</span>
        </div>
      </div>
    );
  }
}

export default CommentReplyList