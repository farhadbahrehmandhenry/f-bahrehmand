import _ from 'lodash';
import React from 'react';

import './Projects.scss';

function Projects() {
  var projects = [
    {
      name: 'Floop Edu', 
      client: 'Floop Edu', 
      about: 'Floop is a cloud-based website where students can receive annotated feedback from teachers and peers.',
      url: 'https://www.floopedu.com',
      accomplishments: [
        'Create several wireframes and communicate with client on desired design.',
        'Added and updated multiple components.',
        'Enable teachers to submit on behalf of students'
      ],
      techStacks: ['React', 'Redux', 'Firebase']
    },
    {
      name: 'Global Tactics', 
      client: 'Global Tactics', 
      about: 'Global Tactics is an international advisory firm that helps corporations, and governments to understand how the world is changing.',
      url: 'https://play.google.com/store/apps/details?id=com.ad430.globaltactics',
      accomplishments: [
        'Made a mobile version of Global Tactics website.',
        'Linked that app with external data including API and other resources of the Global Tactics.',
      ],
      techStacks: ['Android Studio', 'Java', 'CircleCi', 'Junit', 'Firebase']
    },
    {
      name: 'Design Engine', 
      client: 'Henrybuilt', 
      about: "Design Engine is a tool that receives compatible products' details and helps the designers to design more efficiently.",
      url: 'https://henrybuilt.com',
      accomplishments: [
        'Added, updated, and tested different components and features.',
      ],
      techStacks: ['JavaScript', 'CSS', 'AWS', 'SQL', 'Github']
    },
    {
      name: 'SDGE Portal', 
      client: 'SDGE Portal', 
      about: 'During adverse weather conditions, a Public Safety Power Shutoff (PSPS) may be used to help prevent potential wildfires.',
      url: 'https://www.sdge.com/wildfire-safety/psps-more-info',
      accomplishments: [
        'API and Integration testing',
        'End to End testing',
        'Performance testing',
        'QE documentation'
      ],
      techStacks: ['Postman', 'Jasmine', 'Cypress']
    },
    {
      name: 'Real-Time Event and Risk Detection', 
      client: 'Dataminr', 
      about: 'Dataminr’s real-time AI platform detects the earliest signals of high-impact events and emerging risks from within publicly available data.',
      url: 'https://www.dataminr.com/',
      accomplishments: [
        'Leveraging Python Object Oriented Programming for Automation testing.',
        'Communicate with client on suitable test plans.',
      ],
      techStacks: ['Python', 'Selenium', 'Jenkins', 'Gitlab']
    }
  ];

  return (
    <div className='projects'>
      {_.map(projects, project => {
        return (
          <div className='project' key={project.name}>
            <div className='project-name'>{project.name}</div>
            <div className='project-description'>
              <div className='project-about'>{project.about}</div>
              <div className='project-client'><span>Client: </span> <a href={project.url} target='_blank' rel="noreferrer">{project.client}</a></div>
              <div className='project-accomplishment'><span>What I did:</span>
                <ul className='project-accomplishment-items'>
                  {_.map(project.accomplishments, accomplishment => (<li key={accomplishment}>{accomplishment}</li>))}
                </ul>
              </div>
              <div className='project-tech-stach'><span>Tech-stack:</span>
                <ul className='project-tech-stach-items'>
                  {_.map(project.techStacks, techStack => (<li key={techStack}>{techStack}</li>))}
                </ul>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default Projects;