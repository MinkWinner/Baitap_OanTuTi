import * as ActionType from "../constant/constant";

const initialState = {
  player: [
    { id: "keo", hinhAnh: "./img_oantuti/keo.png", active: true },
    { id: "bua", hinhAnh: "./img_oantuti/bua.png", active: false },
    { id: "bao", hinhAnh: "./img_oantuti/bao.png", active: false },
  ],
  result: "I will save the world !!!",
  win: 0,
  total: 0,
  computer: { id: "keo", hinhAnh: "./img_oantuti/keo.png" },
};

export const OanTuTiReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SELECT: {
      let arrTemp = [...state.player];
      arrTemp.forEach((x) => {
        if (x.id === action.payload) x.active = true;
        else x.active = false;
      });
      state.player = arrTemp;
      return { ...state };
    }
    case ActionType.PLAYGAME: {
      let computerUpdate = "";

      let soNgaunhien = Math.floor(Math.random() * 3);
      computerUpdate = state.player[soNgaunhien];

      state.computer = computerUpdate;
      return { ...state };
    }

    case ActionType.RESULT: {
      let playerId = state.player.find((x) => x.active === true).id;
      let computerId = state.computer.id;
      state.total += 1;
      switch (playerId) {
        case "keo": {
          if (computerId === "keo") {
            state.result = "Căng nhỉ";
          } else if (computerId === "bao") {
            state.win += 1;
            state.result = "Game dễ";
          } else {
            state.result = "Bạn hên thôi nha !!!";
          }
          return { ...state };
        }
        case "bua": {
          if (computerId === "keo") {
            state.win += 1;
            state.result = "Thắng rồi";
          } else if (computerId === "bao") {
            state.result = "Bạn hên thôi nha !!!";
          } else state.result = "Căng nhỉ";

          return { ...state };
        }
        case "bao": {
          if (computerId === "keo") {
            state.result = "Bạn hên thôi nha !!!";
          } else if (computerId === "bao") {
            state.result = "Căng nhỉ";
          } else {
            state.win += 1;
            state.result = "Muốn thắng đâu dễ";
          }
          return { ...state };
        }
        default:
          return { ...state };
      }
    }
    default:
      return { ...state };
  }
};
