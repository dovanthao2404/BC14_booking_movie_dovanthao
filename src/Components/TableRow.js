import React, { Component } from 'react'
import { connect } from 'react-redux'

class TableRow extends Component {
  handleClickChair = (chair) => {
    if (chair.daDat !== true) {
      console.log(chair)
    }
  }
  renderRow = () => {
    const { row } = this.props
    const rowTable = [<td key={-1} className="p-2">{row.hang}</td>]
    row.danhSachGhe.forEach((chair, key) => {
      let gheDangChon = chair.gheDangChon ? "gheDangChon" : ""

      rowTable.push(<td key={key} className="p-2">
        <button className={
          chair.daDat ? "gheDuocChon" : "ghe " + gheDangChon
        } onClick={() => {
          this.handleClickChair(chair)
        }}>
          {chair.soGhe}
        </button>
      </td>)
    })
    return rowTable;
  }
  render() {
    return (
      <>
        {this.renderRow()}
      </>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateListChairChosenCurrent: () => {
      dispatch({})
    }
  }
}
export default connect(null, mapDispatchToProps)(TableRow)