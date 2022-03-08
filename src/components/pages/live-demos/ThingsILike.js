import React, {useState, useEffect} from 'react';
import Card from './Card';
import calculator from '../../../assets/calc.png';
import classImg from '../../../assets/class.png';
import exchange from '../../../assets/exchange.png';
import './ThingsILike.scss';
import _ from 'lodash';

function ThingsILike() {
  var topics = [
    {
      name: 'Vanila JavaScript', 
      key: 'vanila',
      links: [
        {name: 'Simple Calculator', url: 'https://www.sitepoint.com/learn-regex/', image: calculator},
        {name: 'Exchange Calculator', url: 'https://www.sitepoint.com/learn-regex/', image: exchange},
      ]
    },
    {
      name: 'Class', 
      key: 'class',
      links: [
        {name: 'Class Object', url: 'https://www.sitepoint.com/learn-regex/', image: classImg},
      ]
    }
  ];

  var [topicSelected, setTopicSelected] = useState('vanila');

  useEffect(() => {

  },[topicSelected]);

  return (
    <div className='things-i-like'>
      <div className='topics-container'>
        <div className='topics'>
          <div className='tabs'>
            {_.map(topics, topic => {
              return (
                <div 
                  className={`tab ${topicSelected === topic.key ? 'active' : ''}`} 
                  onClick={() => setTopicSelected(`${topic.key}`)}
                  key={topic.name}
                >{topic.name}
                </div>
              )  
            })}
          </div>
          <div className='content'>
            {_.map(_.find(topics, topic => topic.key === topicSelected).links, (link, index) => {
              return <Card name={link.name} image={link.image} link={link.url} key={index}/> 
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThingsILike;