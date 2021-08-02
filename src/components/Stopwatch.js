import React from "react";
import {connect} from "react-redux";
import Panel from "./Panel";
import Timer from "./Timer";

class Stopwatch extends React.Component {
  render() {
    const {min, sec, mill, isStart} = this.props;
    return (
      <div className='ui container'>
        <div className='ui center aligned container grid'>
          <div className='row'>
            <div>Stopwatch</div>
          </div>
          <div className='row'>
            <div>{`${min}:${sec}:${mill}`}</div>
          </div>
          <Panel />
        </div>
        <div className='ui inverted grey center aligned segment'>00:00:00</div>
        {isStart ? <Timer /> : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const curTime = state.timeState;
  return {
    min: curTime.min,
    sec: curTime.sec,
    mill: curTime.mill,
    isStart: curTime.isStart,
  };
};

export default connect(mapStateToProps)(Stopwatch);
