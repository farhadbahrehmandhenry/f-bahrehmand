import React from 'react';
import { connect } from 'react-redux';
import { channelItems } from '../pages/channelItems';
import _ from 'lodash';

import './Tv-Switch-Channel.scss';
class TvSwitchChannel extends React.Component {

  state = {}

  render() {
    var degrees = {1: '0deg', 2: '60deg', 3: '120deg', 4: '180deg', 5: '240deg', 6: '300deg'}
    var {channel} = this.props;

    var handleChannelSwitch = (c) => {
      var channel = _.find(channelItems, channel => channel.keyId === c);

      this.props.switchChannel(channel);
      this.props.updateCurrentItem({channel: c, item: channel.items[0]});
      this.props.onGoing('onGoing');
    };

    return (
      <div className='tv-switch-channel'>
        <div className='tv-switch-channel-handle' style={{transform: `rotate(${degrees[channel]})`}}></div>
        <div className='one-four'>
          <div className='number number1' onClick={() => handleChannelSwitch(1)}>
            <div>1</div>
          </div>
          <div className='number number4' onClick={() => handleChannelSwitch(4)}>
            <div>4</div>
          </div>
        </div>
        <div className='two-five'>
          <div className='number number2' onClick={() => handleChannelSwitch(2)}>
            <div>2</div>
          </div>
          <div className='number number5' onClick={() => handleChannelSwitch(5)}>
            <div>5</div>
          </div>
        </div>
        <div className='three-six'>
          <div className='number number3' onClick={() => handleChannelSwitch(3)}>
            <div>3</div>
          </div>
          <div className='number number6' onClick={() => handleChannelSwitch(6)}>
            <div>6</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return { 
    channel: store.channel.channel, 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    switchChannel: (channel) => dispatch({ type: 'switchChannel', payload: channel }),
    onGoing: () => dispatch({ type: 'onGoing', payload: 'onGoing' }),
    updateCurrentItem: (item) => dispatch({ type: 'updateCurrentItem', payload: item })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TvSwitchChannel)
