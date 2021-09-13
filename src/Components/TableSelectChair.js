import React, { Component } from 'react'
import { connect } from 'react-redux';
import TableRow from './TableRow';

class TableSelectChair extends Component {
  renderTHead = () => {
    const tHead = [<th key={0}></th>];
    const totalTH = 13;
    for (let i = 1; i < totalTH; i++) {
      tHead.push(<th key={i}>{i}</th>)
    }
    return tHead;
  }

  renderDataChair = () => {

    const data = [...this.props.dataChair]
    data.shift()

    let table = data.map((row, key) => {
      return <tr key={key} >
        <TableRow row={row} />
      </tr>
    })
    table = table.flat();
    return table
  }
  render() {
    return (
      <table className="mx-auto mt-3 text-center text-warning" style={{ fontSize: 25 }}>
        <thead className="">
          <tr>
            {this.renderTHead()}
          </tr>
        </thead>
        <tbody>
          {this.renderDataChair()}
        </tbody>
      </table>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    dataChair: state.bookingTicketReducer.dataChair
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch1: () => {
      dispatch({})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps,)(TableSelectChair)