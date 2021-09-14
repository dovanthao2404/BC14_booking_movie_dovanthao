import * as ActionBookingTicket from "./../constants"

const updateStatusChair = (chair) => {
  return {
    type: ActionBookingTicket.UPDATE_STATUS_CHAIR,
    payload: chair
  }
}

const payment = (listChair) => {
  return {
    type: ActionBookingTicket.PAYMENT,
    payload: listChair
  }
}

export { updateStatusChair, payment };