import React, { Component } from "react";
import { connect } from "react-redux";

class Result extends Component {
  render() {
    const { result, win, total } = this.props;
    return (
      <div>
        <div className="display-4 text-warning">{result}</div>
        <div className="display-4 text-success">Số bàn thắng: {win}</div>
        <div className="display-4 text-danger">Tổng số bàn chơi: {total}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { result, win, total } = state.OanTuTiReducer;
  return { result, win, total };
};

export default connect(mapStateToProps, null)(Result);
