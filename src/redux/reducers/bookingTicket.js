import dataChair from "./../../data/danhSachGhe.json"
import * as ActionBookingTicket from "./../constants"

const dataLocal = JSON.parse(localStorage.getItem("dataLocal"))
let dataProcessed = [];
if (!dataLocal) {
  dataProcessed = dataChair.map((chair) => {
    const chairCurrent = { ...chair }
    chairCurrent.danhSachGhe = chairCurrent.danhSachGhe.map((chair) => {
      const chairCurrent = { ...chair }
      chairCurrent.gheDangChon = false;

      return chairCurrent
    })
    return chairCurrent;
  })
}

const bookingTicket = {
  dataChair: dataLocal || dataProcessed,
}

export const bookingTicketReducer = (state = bookingTicket, action) => {
  switch (action.type) {
    case ActionBookingTicket.UPDATE_STATUS_CHAIR:
      const temp = [...state.dataChair]
      const statusChairChosen = temp[action.payload.rowNumber].danhSachGhe[action.payload.colNumber].gheDangChon
      temp[action.payload.rowNumber].danhSachGhe[action.payload.colNumber].gheDangChon = !statusChairChosen;
      state.dataChair = temp
      localStorage.setItem("dataLocal", JSON.stringify(state.dataChair))

      return { ...state }

    case ActionBookingTicket.PAYMENT:
      let tempData = [...state.dataChair]
      const listChair = action.payload;

      tempData.forEach((row, keyRow) => {
        row.danhSachGhe.forEach((col, keyCol) => {
          for (let i = 0; i < listChair.length; i++) {
            if (listChair[i].soGhe === col.soGhe) {
              row.danhSachGhe[keyCol].daDat = true;
              row.danhSachGhe[keyCol].gheDangChon = false;
            }
          }
        })
      })

      state.dataChair = tempData;
      localStorage.setItem("dataLocal", JSON.stringify(state.dataChair))

      return { ...state }
    default:
      return { ...state }
  }
}

