import _ from 'lodash';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../state/action-creators'
import { channelItems } from '../pages/channelItems';

import './Tv-Switch-Navigator.scss';

function TvSwitchNavigator() {
  var isOn = useSelector((state) => state.power.isOn);
  var channel = useSelector((state) => state.channel);
  var currentItem = useSelector((state) => state.currentItem);
  var dispatch = useDispatch();
  var {switchChannel, updateCurrentItem} = bindActionCreators(actions, dispatch);

  var handleClick = (side) => {
    if (_.includes(['on', 'onGoing'], isOn)) {
      var itemIndex = _.indexOf(channel.channelItems, currentItem.currentItem.item);

      if (side === 'next') {
        if (itemIndex === channel.channelItems.length - 1) {
          var nextChannelId = channel.channel + 1 > 6 ? 1 : channel.channel + 1;
          var nextChannel = _.find(channelItems, channel => channel.keyId === nextChannelId);

          switchChannel(nextChannel);
          updateCurrentItem({channel: nextChannelId, item: nextChannel.items[0]});
        } 
        else {
          updateCurrentItem({channel: channel.channel, item: channel.channelItems[itemIndex + 1]});
        }
      }
      else {
        if (itemIndex === 0) {
          var prevChannelId = channel.channel - 1 < 1 ? 6 : channel.channel - 1;
          var prevChannel = _.find(channelItems, channel => channel.keyId === prevChannelId);

          switchChannel(prevChannel);
          updateCurrentItem({channel: prevChannelId, item: prevChannel.items[prevChannel.items.length - 1]});
        }  
        else {
          updateCurrentItem({channel: channel.channel, item: channel.channelItems[itemIndex - 1]});
        }
      }
    }
  }

  return (
    <div className={`tv-switch-navigator ${_.includes(['on', 'onGoing'], isOn) ? 'active' : ''}`}>
      <div className='tv-prev-button' onClick={() => handleClick('prev')}>
        <div className={`${_.includes(['on', 'onGoing'], isOn) ? 'both-blinking' : ''}`}></div>
        <div className='has-previous'></div>
      </div>
      <div className='tv-next-button' onClick={() => handleClick('next')}>
      <div className={`${_.includes(['on', 'onGoing'], isOn) ? 'both-blinking' : ''}`}></div>
        <div className='has-next'></div>
      </div>
    </div>
  );
}

export default TvSwitchNavigator;