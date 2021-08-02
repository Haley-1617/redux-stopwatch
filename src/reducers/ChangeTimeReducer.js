const defaultTime = new Date(0, 0);

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (
  state = {
    min: defaultTime.getMinutes(),
    sec: defaultTime.getSeconds(),
    mill: defaultTime.getMilliseconds(),
    isStart: false,
    offset: null,
  },
  action
) => {
  switch (action.type) {
    case "INC":
      return state.sec + 1 < 60
        ? {...state, sec: state.sec + 20}
        : {...state, min: state.min + 1, sec: 0};
    case "DEC":
      return state.sec - 1 > 0
        ? {...state, sec: state.sec - 1}
        : {...state, min: state.min - 1, sec: 59};
    case "START":
      return {...state, isStart: true, offset: action.now};
    case "TICK":
      const {min, sec, mill} = calcTime(
        state.min,
        state.sec,
        state.mill,
        action.startTime - state.offset
      );
      return {
        ...state,
        min: min,
        sec: sec,
        mill: mill,
        offset: Date.now(),
      };

    case "STOP":
      return {...state, isStart: false};
    case "RESET":
      return {
        ...state,
        min: defaultTime.getMinutes(),
        sec: defaultTime.getSeconds(),
        mill: defaultTime.getMilliseconds(),
        isStart: false,
      };
    default:
      return state;
  }
};

const calcTime = (min, sec, mil, timeElapsed) => {
  const oldTime =
    parseInt(min, 10) * 60 * 1000 +
    parseInt(sec, 10) * 1000 +
    parseInt(mil, 10);
  const newTime = oldTime - timeElapsed;

  // alert(
  //   "old time: " +
  //     oldTime +
  //     " | timeElapsed: " +
  //     timeElapsed +
  //     " | newTime: " +
  //     newTime
  // );

  const minInt = Math.floor(newTime / 60000),
    secInt = Math.floor((newTime % 60000) / 1000),
    millInt = newTime % 1000;

  const result = {
    min: minInt.toString(),
    sec: secInt.toString(),
    mill: millInt.toString().substring(0, 2),
  };
  // alert(JSON.stringify(result));
  return result;
};
