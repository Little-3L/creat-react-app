import React, { Component } from "react"
import SearchBar from './SearchBar'
import ComicTable from './ComicTable'
import '../../../css/components/Search.css'

//创建根据用户输入过滤展示数据组件
class FilterableComicTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      finishedOnly: false,
      Gtype: false,
    }
  }

  //根据子组件传入的参数改变state
  handleUserInput = (filterText, finishedOnly, Gtype) => {
    this.setState({
      filterText: filterText,
      finishedOnly: finishedOnly,
      Gtype: Gtype,
    });
  }

  render() {
    return (
      <div className='wrap'>
        <SearchBar
          filterText={this.state.filterText}
          finishedOnly={this.state.finishedOnly}
          Gtype={this.state.Gtype}
          onUserInput={this.handleUserInput}
        />
        <ComicTable
          comics={this.props.comics}
          filterText={this.state.filterText}
          finishedOnly={this.state.finishedOnly}
          Gtype={this.state.Gtype}
        />
      </div>
    );
  }
};

export default FilterableComicTable