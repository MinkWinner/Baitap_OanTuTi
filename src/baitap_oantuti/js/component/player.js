import React, { Component } from "react";
import { connect } from "react-redux";
import { select } from "../../redux/action/action";

class Player extends Component {
  render() {
    const { player } = this.props;
    return (
      <div className="player">
        <div className="think">
          <img
            src={player.find((x) => x.active === true).hinhAnh}
            alt={player.find((x) => x.active === true).id}
          />
        </div>
        <div className="speech-bubble"></div>
        <img className="iconAva" src="./img_oantuti/player.png" alt="player" />
        <div className="row">
          {this.props.player.map((x, index) => {
            let border = {};
            if (x.active) border = { border: "3px solid orange" };
            return (
              <div className="col-4" key={index}>
                <button
                  style={border}
                  className="btnItem"
                  onClick={() => {
                    this.props.selection(x.id);
                  }}
                >
                  <img className="img-fluid" src={x.hinhAnh} alt={x.id} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    player: state.OanTuTiReducer.player,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selection: (option) => {
      dispatch(select(option));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
