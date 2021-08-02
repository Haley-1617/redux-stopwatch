import React from "react";
import {connect} from "react-redux";
import {increment, decrement, start, stop, reset} from "../actions";

class Panel extends React.Component {
  render() {
    return (
      <div className='row'>
        <button
          className='small ui button'
          onClick={() => this.props.increment()}
        >
          +
        </button>
        <button className='small ui button' onClick={() => this.props.start()}>
          Start
        </button>
        <button className='small ui button' onClick={() => this.props.stop()}>
          Stop
        </button>
        <button className='small ui button'>Lap</button>
        <button className='small ui button' onClick={() => this.props.reset()}>
          Reset
        </button>
        <button
          className='small ui button'
          onClick={() => this.props.decrement()}
        >
          -
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.timeState;
};

export default connect(mapStateToProps, {
  increment,
  decrement,
  start,
  stop,
  reset,
})(Panel);
