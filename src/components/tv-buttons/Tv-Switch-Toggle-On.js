import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../../state/action-creators'
import power from '../../assets/power.png';
import _ from 'lodash';

import './Tv-Switch-Toggle-On.scss';

function TvSwitchToggleOn() {
  const isOn = useSelector((state) => state.power.isOn);
  const dispatch = useDispatch();
  const {turnOff, turnOn} = bindActionCreators(actions, dispatch)

  const handlePower = () => {
    if (_.includes(['on', 'onGoing'], isOn)) turnOff();
    else if (isOn === 'off') turnOn();
  };

  return (
    <div 
      className='tv-switch-toggle-on' 
      style={{borderColor: _.includes(['on', 'onGoing'], isOn) ? 'green' : 'red'}} 
      onClick={() => handlePower()}
    >
      <img alt="no" src={power}></img>
    </div>
  );
}

export default TvSwitchToggleOn;