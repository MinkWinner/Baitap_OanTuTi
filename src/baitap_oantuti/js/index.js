import React, { Component } from "react";
import "./../css/index.css";
import "./../css/buble.css";
import Player from "./component/player";
import Computer from "./component/computer";
import Result from "./component/result";
import { connect } from "react-redux";
import { playGame, showResult } from "../redux/action/action";

class OanTuTi extends Component {
  render() {
    return (
      <div className="bg pt-4">
        <div className="row">
          <div className="col-4 text-center">
            <Player />
          </div>
          <div className="col-4 text-center">
            <Result />
            <button
              className="btn btn-success my-5"
              onClick={() => {
                this.props.playGame();
              }}
            >
              Play Game
            </button>
          </div>
          <div className="col-4 text-center">
            <Computer />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let count = 0;
      let replay = setInterval(() => {
        dispatch(playGame());
        count++;
        if (count >= 10) {
          clearInterval(replay);
          dispatch(showResult());
        }
      }, 100);
    },
  };
};

export default connect(null, mapDispatchToProps)(OanTuTi);
