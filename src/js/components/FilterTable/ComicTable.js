import React, { Component } from "react"
import ComicCategoryRow from './ComicCategoryRow'
import ComicRow from './ComicRow'

//创建根据用户输入过滤展示数据组件
class ComicTable extends Component {
  render() {
    var rows = [];
    var lastCategory = null;
    this.props.comics.forEach((comic) => {
      //过滤数据
      if (comic.name.indexOf(this.props.filterText) === -1 || (!comic.unfinished && this.props.finishedOnly)) {
        return;
      }
      if (comic.name.indexOf(this.props.filterText) === -1 || (!comic.Rtype && this.props.Gtype)) {
        return;
      }

      //按分类显示,如果是一个新的列标题,则加上列标题
      if (comic.category !== lastCategory) {
        rows.push(<ComicCategoryRow category={comic.category} key={comic.category} />);
      }

      //插入列表
      rows.push(<ComicRow comic={comic} key={comic.name} />);
      lastCategory = comic.category;
    });

    return (
      <table className='comictable'>
        <thead>
          <tr>
            <th className='comictable-th'
              width='17%'>番剧名称</th>
            <th className='comictable-th'
              width='8%'>番剧类型</th>
            <th className='comictable-th'
              width='10%'>更新状态</th>
            <th className='comictable-th'
              width='10%'>更新时间</th>
            <th className='comictable-th'
              width='55%'>故事简介</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
};

export default ComicTable