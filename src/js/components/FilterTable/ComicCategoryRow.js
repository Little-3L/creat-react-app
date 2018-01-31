import React, { Component } from "react"

//类型表头
class ComicCategoryRow extends Component {
  render() {
    return (
      <tr><th colSpan='5' className='comiccategoryrow'>{this.props.category}</th></tr>
    );
  }
};

export default ComicCategoryRow