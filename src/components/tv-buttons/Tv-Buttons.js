import React from 'react';
import TvSpeaker from '../tv-speaker/Tv-Speaker';
import TvSwitchChannel from './Tv-Switch-Channel';
import TvSwitchNavigator from './Tv-Switch-Navigator';
import TvSwitchToggleOn from './Tv-Switch-Toggle-On';
import { channelItems } from '../pages/channelItems';
import { useSelector } from 'react-redux';
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import gmail from '../../assets/gmail.jpg'

import _ from 'lodash';

import './Tv-Buttons.scss';

function TvButtons() {
  var channel = useSelector((state) => state.currentItem.currentItem);
  var isOn = useSelector((state) => state.power.isOn);
  var channelKey = _.capitalize(_.find(channelItems, c => c.keyId === channel.channel).key);
  var currentItem = _.capitalize(channel.item);

  return (
    <div className='tv-buttons'>
      <div className='tv-switch-channel-container'>
        <TvSwitchChannel />
        <div className='tv-channel-description'>
          <span className='channel-key'>{`${_.includes(['onGoing', 'on'], isOn) ? channelKey : '' }`}</span>
          <span className='channel-item'>{`${_.includes(['onGoing', 'on'], isOn) ? currentItem : '' }`}</span>
        </div>
        <TvSwitchNavigator />
        {/* <FormControlLabel 
          control={<Switch onChange={(event) => event.target.checked ? enableScroll(true) : disableScroll(false)} />} 
          label="Scroll Mode" 
          className='scroll-switch' 
          color="secondary"
        /> */}
      </div>
      <TvSpeaker />
      <div className='bottom-buttons'>
        <div className='tv-switch-toggles-container'>
          <TvSwitchToggleOn />
          <div className='tv-switch-toggle-light'></div>
        </div>
        <div className='linkedin' onClick={() => window.open('https://www.linkedin.com/in/farhad-bahrehmand/ ', '_blank')}>
          <img src={linkedin} alt='not found'></img>
        </div>
        <div className='github' onClick={() => window.open('https://github.com/farhadbahrehmandhenry', '_blank')}>
          <img src={github} alt='not found'></img>
        </div>
        <div className='gmail' onClick={() => window.open('mailto:fbahrehmand82@gmail.com?subject=Subject&body=Body%20goes%20here')}>
          <img src={gmail} alt='not found'></img>
        </div>
      </div>
    </div>
  );
}

export default TvButtons;