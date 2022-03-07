import React from 'react';
import TvScreenNav from './Tv-Screen-Nav';
import { connect } from 'react-redux';

import './Tv-Screen.scss';

class TvScreen extends React.Component {   
  render() {
    var {isOn} = this.props;

    return (
      <div className='tv-screen'>
        <div className={`tv-on-screen ${isOn}`}></div>
        <div className={`tv-on-screen-contents ${isOn}`}>
          {isOn !== 'off' && <TvScreenNav />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    isOn: store.power.isOn,
    channel: store.channel.channel, 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    switchChannel: (channel) => dispatch({ type: 'switchChannel', payload: channel }),
    updateCurrentItem: (item) => dispatch({ type: 'updateCurrentItem', payload: item }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TvScreen);
