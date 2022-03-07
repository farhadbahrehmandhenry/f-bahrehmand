import React from 'react';
import Education from '../pages/education/Education';
import Main from '../pages/main/Main';
import Projects from '../pages/projects/Projects';
import Summary from '../pages/summary/Summary';
import ThingsILike from '../pages/things-I-like/ThingsILike';
import WorkExperience from '../pages/work-experience/Work-Experience';
import { useSelector } from 'react-redux';


function TvScreenNav() {
  var channel = useSelector((state) => state.channel.channel);
  var Comoponent;

  if (channel === 1) Comoponent = <Main />
  if (channel === 2) Comoponent = <Summary />
  if (channel === 3) Comoponent = <Education />
  if (channel === 4) Comoponent = <WorkExperience />
  if (channel === 5) Comoponent = <Projects />
  if (channel === 6) Comoponent = <ThingsILike />

  return <div className='tv-screen-nav'>{Comoponent}</div>
}

export default TvScreenNav;
