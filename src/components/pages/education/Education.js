import React from 'react';

import './Education.scss';

function Education() {  
  return (
    <div className='education'>
      <div className='education-title'>Education</div>
      <div className='education-degrees'>
        <div className='year-2001-content cert'>
          <div className='education-title'>Visual Basic 6</div>
          <ul className='education-description'>
            <li>Course</li>
            <li>Iran-Tehran</li>
            <li>2001</li>
          </ul>
        </div>
        <div className='year-2003-content cert'>
          <div className='education-title'>Network+</div>
          <ul className='education-description'>
            <li>Certificate</li>
            <li>Iran-Tehran</li>
            <li>2002</li>
          </ul>
        </div>
        <div className='year-2004-content degree'>
          <div className='education-title'>Industrial Management</div>
          <ul className='education-description'>
            <li>Bachelor Degree</li>
            <li>Azad University</li>
            <li>Iran-Tehran</li>
            <li>2004-2008</li>
          </ul>
        </div>
        <div className='year-2009-content cert'>
          <div className='education-title'>ICDL</div>
            <ul className='education-description'>
              <li>Certificate</li>
              <li>Iran-Tehran</li>
              <li>2009</li>
            </ul>
        </div>
        <div className='year-2012-content cert'>
          <>
            <div className='education-title'>MS Excel</div>
            <ul className='education-description'>
              <li>Course</li>
              <li>Iran-Tehran</li>
              <li>2010</li>
            </ul>
          </>
          <>
            <div className='education-title'>MS Access</div>
            <ul className='education-description'>
              <li>Course</li>
              <li>Iran-Tehran</li>
              <li>2010</li>
            </ul>
          </>
        </div>
        <div className='year-2016-content cert'>
          <div className='education-title'>Photoshop</div>
            <ul className='education-description'>
              <li>Course</li>
              <li>Seattle-WA</li>
              <li>2018</li>
            </ul>
        </div>
        <div className='year-2017-content cert'>
          <>
            <div className='education-title'>Javascript</div>
            <ul className='education-description'>
              <li>Course</li>
              <li>Seattle-WA</li>
              <li>2018</li>
            </ul>
          </>
          <>
            <div className='education-title'>SQL</div>
            <ul className='education-description'>
              <li>Course</li>
              <li>Seattle-WA</li>
              <li>2018</li>
            </ul>
          </>
        </div>
        <div className='year-2018-content degree'>
          <div className='education-title'>Application Development</div>
          <ul className='education-description'>
            <li>Bachelor Degree</li>
            <li>North Seattle College</li>
            <li>Seattle-WA</li>
            <li>2018-2021</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Education;
