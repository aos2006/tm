import React, {Component, PropTypes} from 'react';import TableListHead from './TableListHead';import TableListRow from './TableListRow';import TableFilters from '../TableFilters/TableFilters';import {sortTableListItems} from '../../AC/tableList';import {connect} from 'react-redux';class TableList extends Component {  static propTypes = {    tableListData: PropTypes.array,    page: PropTypes.string,    sortedRowItems: PropTypes.array,    sorted: PropTypes.bool,    filtersList: PropTypes.array,    headItems: PropTypes.array  };  state = {    isFiltred: false  };    getHeadItems(){    const headItems = this.props.headItems;    return headItems.map((item, index) => {     return  <TableListHead text={item} key={index}/>    })  }  getBody(){      const tableListData = this.props.sorted ? this.props.sortedRowItems : this.props.tableListData;      const items = tableListData.filter((item) => {        if (!this.props.sorted) {          return +item.id <= 5 * this.props.page && +item.id > 5 * this.props.page - 5        }        return item;    });    return items.map((item)=>{        return <TableListRow          item={item}          key={item.id}        />    })  }    render() {    if (!this.props.tableListData) return null;    return (          <div className="table-list-wrapper admin-layout__table-list">            <table className="table-list">              <thead>              <tr className="table-list__head">                {this.getHeadItems()}                <th className="table-list__cell">&nbsp;</th>              </tr>              <TableFilters filtersList={this.props.filtersList}/>              </thead>              <tbody>                {this.getBody()}              </tbody>            </table>          </div>  )  }  }  export default connect((state) => ({    sortedRowItems: state.sortedRowItems.data,    sorted: state.sortedRowItems.sorted  }), {sortTableListItems})(TableList)