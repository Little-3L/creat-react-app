import React, { Component } from "react"

//列表组件
class ComicRow extends Component {
  render() {
    //未完结就用颜色标注
    var name = this.props.comic.unfinished ? this.props.comic.name :
      < span style={{ color: 'red' }}>
        {this.props.comic.name}
      </span >
    return (
      <tr className='comicrow'>
        <td className='comicrow-tb'>{name}</td>
        <td className='comicrow-tb'>{this.props.comic.Ctype}</td>
        <td className='comicrow-tb'>{this.props.comic.Ustate}</td>
        <td className='comicrow-tb'>{this.props.comic.Udate}</td>
        <td className='text-intro'>{this.props.comic.TextIntro}</td>
      </tr>
    );
  }
};

export default ComicRow