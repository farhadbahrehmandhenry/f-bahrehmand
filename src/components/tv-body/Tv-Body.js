import React from 'react';
import TvButtons from '../tv-buttons/Tv-Buttons';
import TvScreen from '../tv-screen/Tv-Screen';

import './Tv-Body.scss';

function TvBody() {
  return (
    <div className='tv-body'>
      <TvScreen />
      <TvButtons />
    </div>
  );
}

export default TvBody;