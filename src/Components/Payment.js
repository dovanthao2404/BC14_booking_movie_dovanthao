import React, { Component } from 'react'
import { connect } from 'react-redux'

class Payment extends Component {
  renderInfo = () => {
    const { dataChair } = this.props.bookingTicket
    let totalSalary = 0;
    let totalChair = 0;
    let flag = false
    for (let i = 0; i < dataChair.length; i++) {
      if (i === 0) {
        continue;
      }
      const danhSachGhe = [...dataChair[i].danhSachGhe]
      for (let j = 0; j < danhSachGhe.length; j++) {
        if (danhSachGhe[j].gheDangChon === true && danhSachGhe[j].daDat === false) {
          flag = true;
          totalChair++;
          totalSalary += danhSachGhe[j].gia;
        }
      }
    }
    if (flag) {
      return (
        <>
          <h3>Tổng số ghế: {totalChair}</h3>
          <h3>Tổng tiền: {totalSalary}</h3>
          <button className="btn btn-success">Thanh toán</button>
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
    dispatch1: () => {
      dispatch()
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Payment)