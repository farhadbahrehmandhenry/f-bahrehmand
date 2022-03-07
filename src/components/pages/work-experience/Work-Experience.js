import React from 'react';

import './Work-Experience.scss';

function WorkExperience() {
  var handleClick = () => {
    if (window.innerWidth <= 550) {

    }
  }

  return (
    <div className='work-experience'>
      <div className='work-experience-graph'>
        <div className='work-experience-x'>
          <div className='work-experience-x-description'>Description</div>
        </div>
        <div className='work-experience-y'>
          <div className='work-experience-graph-content'>
            <div className='year-2002-content job' onClick={() => handleClick()}>
              <div className='job-title'>Private Bank Associate</div>
              <div className='job-description-one'>
                <div className='employer'>
                  <div>Employer:</div>
                  <a href='https://www.bankmellat.ir/' target="_blank" rel="noreferrer">Bank Mellat</a>
                </div>
                <li>Leveraging MS Excell and Access to create and export data</li>
                <li>Creating reports and data visuadivzation using Excell, Access</li>
                <li>Communicating and transferring data and messages using FTP and SWIFT</li>
              </div>
            </div>
            <div className='year-2017-content job'>
              <div className='job-title'>Henrybuilt</div>
              <div className='job-description'>
                <div className='employer'>
                  <div>Employer:</div>
                  <a href='https://henrybuilt.com/' target="_blank" rel="noreferrer">Henrybuilt</a>
                </div>
              </div>
            </div>
            <div className='year-2019-content job'>
              <div className='job-title'>Software Engineer</div>
              <div className='job-description'> 
                <div className='employer'>
                  <div className='job-title'>Employer:</div>
                  <a href='https://www.symbolicframeworks.com/' target="_blank" rel="noreferrer">Symbolic Frameworks</a>
                </div>
                <li>Add features and components to the web applications</li>
                <li>Test the applications and resolve all the possible bugs</li>
                <li>Maintain the applications using languages, platforms, frameworks</li>
              </div>
            </div>
            <div className='year-2021-content job'>
              <div className='job-title'>Software Quality Engineer</div>
              <div className='job-description'> 
                <div className='employer'>
                  <div>Employer:</div>
                  <a href='https://www.slalombuild.com/' target="_blank" rel="noreferrer">Slalom_build</a>
                </div>
                <li>Developing and implementing quality standards.</li>
                <li>Inspecting and testing processes and products to ensure quality specifications</li>
                <li>Collaborating with team members to develop and implement standard features</li>
                <li>Document test cases, tickets, stories, user manuals, ...</li>
                <li>Implementing tests including Unit tests, Integration tests, and Automation tests</li>
                <li>Reviewing codes, specifications, and processes.</li>
              </div>
            </div>
          </div>
          <div className='work-experience-graph-years'>
            <div className='year-2001'>2001</div>
            <div className='year-2002'>2002</div>
            <div className='year-2003'>2003</div>
            <div className='year-2004'>2004</div>
            <div className='year-2005'>2005</div>
            <div className='year-2006'>2006</div>
            <div className='year-2007'>2007</div>
            <div className='year-2008'>2008</div>
            <div className='year-2009'>2009</div>
            <div className='year-2010'>2010</div>
            <div className='year-2011'>2011</div>
            <div className='year-2012'>2012</div>
            <div className='year-2013'>2013</div>
            <div className='year-2014'>2014</div>
            <div className='year-2015'>2015</div>
            <div className='year-2016'>2016</div>
            <div className='year-2017'>2017</div>
            <div className='year-2018'>2018</div>
            <div className='year-2019'>2019</div>
            <div className='year-2020'>2020</div>
            <div className='year-2021'>2021</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;