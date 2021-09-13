import dataChair from "./../../data/danhSachGhe.json"
import * as ActionBookingTicket from "./../constants"

const dataProcessed = dataChair.map((chair) => {
  const chairCurrent = { ...chair }
  chairCurrent.danhSachGhe = chairCurrent.danhSachGhe.map((chair) => {
    const chairCurrent = { ...chair }
    chairCurrent.gheDangChon = true;
    return chairCurrent
  })
  return chairCurrent;
})

const bookingTicket = {
  dataChair: dataProcessed,
}

export const bookingTicketReducer = (state = bookingTicket, action) => {
  return { ...state }
}

