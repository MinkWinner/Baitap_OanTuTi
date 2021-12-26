import React, { Component } from "react";
import { connect } from "react-redux";

class Computer extends Component {
  render() {
    let keyframe = `@keyframes randomItem${Date.now()}{
      0% {top: -10px}
      25% {top: 25px}
      50% {top: -10px}
      75% {top: 25px}
      100% {top: 0}
    }`;
    const { hinhAnh, id } = this.props.computer;
    return (
      <div className="player">
        <style>{keyframe}</style>
        <div style={{ position: "relative" }} className="think">
          <img
            style={{
              position: "absolute",
              animation: `randomItem${Date.now()} 0.5s`,
            }}
            src={hinhAnh}
            alt={id}
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          className="iconAva"
          src="./img_oantuti/playerComputer.png"
          alt="playerComputer"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    computer: state.OanTuTiReducer.computer,
  };
};

export default connect(mapStateToProps, null)(Computer);
