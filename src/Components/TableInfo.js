import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { v4 as uuidv4 } from 'uuid';

class TableInfo extends Component {


  // Xử lý rennder tBody của phần tính tiền
  renderTBody = () => {
    const { bookingTicket } = this.props
    const listTR = []

    // Lặp trong data xem có ghế nào có thuộc tính gheDangChon = true thì append vào table
    bookingTicket.dataChair.forEach((chair, key) => {
      if (key !== 0) {
        chair.danhSachGhe.forEach((chairCurrent) => {
          if (chairCurrent.gheDangChon === true && chairCurrent.daDat === false) {
            listTR.push(
              <tr key={chairCurrent.soGhe}>
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



  // Hàm xử lý render table số ghế đã chọn
  renderTable = () => {
    const { dataChair } = this.props.bookingTicket
    let flag = false;
    for (let i = 0; i < dataChair.length; i++) {
      if (i !== 0) {
        const listChair = [...dataChair[i].danhSachGhe]
        for (let j = 0; j < listChair.length; j++) {
          if (listChair[j].gheDangChon === true) {
            flag = true;
            break;
          }
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

const mapStateToProps = (state) => {
  return {
    bookingTicket: state.bookingTicketReducer
  }
}

export default connect(mapStateToProps)(TableInfo)