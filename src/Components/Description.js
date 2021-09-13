import React, { PureComponent } from 'react'

export default class Description extends PureComponent {
  render() {
    return (
      <div className="description">
        <div className="d-flex mt-1">
          <button style={{ cursor: 'default' }} className="mr-1 gheDuocChon description__button"></button>
          <span className="text-light" style={{ fontSize: 25 }}>Ghế đã đặt</span>
        </div>
        <div className="d-flex mt-1">
          <button style={{ cursor: 'default' }} className="mr-1 gheDangChon"></button>
          <span className="text-light" style={{ fontSize: 25 }}>Ghế đang đặt</span>
        </div>
        <div className="d-flex mt-1">
          <button style={{ cursor: 'default', marginLeft: 0 }} className="mr-1 ghe" ></button>
          <span className="text-light" style={{ fontSize: 25 }}>Ghế chưa đặt</span>
        </div>
      </div>
    )
  }
}
