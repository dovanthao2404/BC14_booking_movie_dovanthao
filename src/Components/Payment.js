import React, { Component } from 'react'
import { connect } from 'react-redux'
import { payment } from "./../redux/actions"
class Payment extends Component {

  handlePayment = (listChair) => {
    this.props.payment(listChair)
  }

  renderInfo = () => {
    const { dataChair } = this.props.bookingTicket
    let totalSalary = 0;
    let totalChair = 0;
    let flag = false;
    const listChair = []
    // Kiểm tra trong mảng có ghế đang chọn không nếu có thì đổi cờ, thêm vào listChair, tính tổng số ghế và tổng tiền

    for (let i = 0; i < dataChair.length; i++) {
      if (i === 0) {
        continue;
      }
      const danhSachGhe = [...dataChair[i].danhSachGhe]
      for (let j = 0; j < danhSachGhe.length; j++) {
        if (danhSachGhe[j].gheDangChon === true && danhSachGhe[j].daDat === false) {

          flag = true;
          listChair.push(danhSachGhe[j])
          // Tính tổng tiền và tổng số ghế người dùng đạng chọn
          totalChair++;
          totalSalary += danhSachGhe[j].gia;
        }
      }
    }
    // if flag === true thì hiển thị phần thanh toán
    if (flag) {
      return (
        <>
          <h3>Tổng số ghế: {totalChair}</h3>
          <h3>Tổng tiền: {totalSalary}</h3>
          <button className="btn btn-success" onClick={() => this.handlePayment(listChair)}>Thanh toán</button>
        </>
      )
    }
  }

  render() {
    return (
      <div className="payment text-warning mt-5" >
        {this.renderInfo()}
      </div >
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    bookingTicket: state.bookingTicketReducer
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    payment: (listChair) => {
      dispatch(payment(listChair))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Payment)