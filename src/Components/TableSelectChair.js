import React, { Component } from 'react'
import { connect } from 'react-redux';
import { updateStatusChair } from '../redux/actions';
// import TableRow from './TableRow';

class TableSelectChair extends Component {

  // Render thead của table chọn ghê
  renderTHead = () => {
    const tHead = [<th key={0}></th>];
    const { bookingTicket } = this.props
    const data = [...bookingTicket.dataChair]
    const totalTH = data[0].danhSachGhe.length;

    for (let i = 0; i < totalTH; i++) {
      tHead.push(<th key={i + 1}>{i + 1}</th>)
    }
    return tHead;
  }
  // Xử lý khi người dùng click vào ghế
  handleClickChair = (chair) => {
    if (chair.daDat !== true) {
      this.props.updateStatusChair(chair)
    }
  }

  renderDataChair = () => {

    const { bookingTicket } = this.props
    // Copy và bỏ phần tử đầu của dataChair
    const data = [...bookingTicket.dataChair]
    data.shift()

    // Render row
    let table = data.map((row, key) => {
      const rowNumber = key
      return <tr key={key} >
        <td key={key} className="p-2">
          {row.hang}
        </td >
        {row.danhSachGhe.map((chair, key) => {
          const chairTemp = { ...chair, rowNumber, colNumber: key }
          let gheDangChon = chairTemp.gheDangChon ? "gheDangChon" : ""
          // render col
          return <td key={key} className="p-2">
            <button className={chair.daDat ? "gheDuocChon" : "ghe " + gheDangChon}
              onClick={() => {
                this.handleClickChair(chairTemp)
              }}
            >{chair.soGhe}</button>
          </td>
        })}
      </tr >
    })
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
    bookingTicket: state.bookingTicketReducer
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateStatusChair: (chair) => {
      dispatch(updateStatusChair(chair))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps,)(TableSelectChair)