import React, { Component } from 'react'
import "./../assets/css/BaiTapBookingTicket.css"
import Description from './Description'
import Payment from './Payment'
import TableInfo from './TableInfo'
import TableSelectChair from './TableSelectChair'

export default class BookingTicket extends Component {
  render() {
    return (
      <div id="booking-ticket"
        className="container-fuild"
        style={{
          backgroundImage: "url(./img/bgmovie.jpg)",
          position: 'fixed',
          inset: 0,
          backgroundSize: "100%"
        }}>
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.7)" }}></div>
        <div className="row">
          <div className="col-8">
            <h1 className="text-center text-warning mt-2">Đặt vé xem phim Cybersoft</h1>
            <p className="text-center mt-3 mb-0 text-light" style={{ fontSize: 30 }}>Màn hình</p>
            <div className="screen mx-auto mt-1"></div>
            <TableSelectChair />
          </div>

          <div className="col-4">
            <h1 className="text-center text-light mt-2">Danh sách gế bạn chọn</h1>
            <Description />
            <TableInfo />
            <Payment />
          </div>
        </div>
      </div >
    )
  }
}
