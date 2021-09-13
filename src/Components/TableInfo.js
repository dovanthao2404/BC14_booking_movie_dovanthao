import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { v4 as uuidv4 } from 'uuid';

class TableInfo extends Component {

  renderTBody = () => {
    const { bookingTicket } = this.props
    const listTR = []
    bookingTicket.dataChair.forEach((chair, key) => {
      if (key !== 0) {
        chair.danhSachGhe.forEach((chairCurrent, keyCurrent) => {
          if (chairCurrent.gheDangChon === true && chairCurrent.daDat === false) {
            const idCurrent = key + 1 * keyCurrent * Math.random() * Math.random() * Math.random() * Math.random() * Math.random() * Math.random() * Math.random();
            listTR.push(<tr key={idCurrent}>
              <td>{chairCurrent.soGhe}</td>
              <td>{chairCurrent.gia}</td>
              <td>
                <button className="btn btn-danger">X</button>
              </td>
            </ tr>)
          }
        })
      }
    })

    return listTR;
  }

  renderTable = () => {
    const { dataChair } = this.props.bookingTicket
    let flag = false
    for (let i = 0; i < dataChair.length; i++) {
      const danhSachGhe = [...dataChair[i].danhSachGhe]
      for (let j = 0; j < danhSachGhe.length; j++) {
        if (danhSachGhe[j].gheDangChon === true) {
          flag = true;
          break;
        }
      }
      if (flag) {
        break;
      }
    }
    if (flag) {
      return (<table
        className="table table-bordered text-light"
        style={{ fontSize: 20, overflowY: 'scroll' }}
      >
        <thead className="bg-dark">
          <tr>
            <th>Số ghế</th>
            <th>Giá</th>
            <th>Hủy</th>
          </tr>
        </thead>
        <tbody >
          {this.renderTBody()}
        </tbody>
      </table>)
    }

  }

  render() {

    return (
      <div style={{ width: '60%', height: '400px', overflow: 'auto' }} >
        {this.renderTable()}
      </div >
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    bookingTicket: state.bookingTicketReducer
  }
}

export default connect(mapStateToProps)(TableInfo)