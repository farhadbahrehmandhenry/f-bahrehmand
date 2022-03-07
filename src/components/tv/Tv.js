import React from 'react';
import TvBody from '../tv-body/Tv-Body';
import TvLegs from '../tv-legs/Tv-Legs';
import TvSwitchNavigator from '../tv-buttons/Tv-Switch-Navigator';
import TvSwitchToggleOn from '../tv-buttons/Tv-Switch-Toggle-On';

import './Tv.scss';

function Tv() {
  return (
    <div className="tv">
      <TvBody />
      <TvLegs />
      <div className='next-prev-container'>
        <TvSwitchToggleOn />
        <TvSwitchNavigator />
      </div>
    </div>
  );
}

export default Tv;