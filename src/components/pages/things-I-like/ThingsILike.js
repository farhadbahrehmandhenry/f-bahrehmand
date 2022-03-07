import React, {useState, useEffect} from 'react';
import Card from './Card';
import regex from '../../../assets/regex.png';
import platton from '../../../assets/paletton.png';
import mui from '../../../assets/mui.png';
import coolors from '../../../assets/coolors.jpg';
import freecodecamp from '../../../assets/freecodecamp.svg';
import flexboxfroggy from '../../../assets/flexbox-froggy.png';
import flexboxdefense from '../../../assets/flexboxdefense.jpg';
import gridgarden from '../../../assets/gridgarden.jpg';
import flukeout from '../../../assets/flukeout.jpeg';
import w3logo from '../../../assets/w3logo.jpg';
import w3resource from '../../../assets/w3resource.png';
import practity from '../../../assets/practity.jpg';
import grid from '../../../assets/grid.jpg';
import animejs from '../../../assets/animejs.png';
import ecmascript from '../../../assets/ecmascript.png';
import frontendmasters from '../../../assets/frontendmasters.jpg';
import stateofjs from '../../../assets/stateofjs.png';
import npmjs from '../../../assets/npmjs.png';
import elevatorsaga from '../../../assets/elevatorsaga.png';
import react from '../../../assets/react.png';
import lodash from '../../../assets/lodash.png';
import youtube from '../../../assets/youtube.png';
import pokeapi from '../../../assets/pokeapi.png';
import sitepoint from '../../../assets/sitepoint.png';
import loom from '../../../assets/loom.png';
import websocket from '../../../assets/websocket.png';
import dogapi from '../../../assets/dog-api.webp';
import swapi from '../../../assets/swapi.png';
import randomuser from '../../../assets/randomuser.png';
import stackedit from '../../../assets/stackedit.png';
import typingclub from '../../../assets/typingclub.jpeg';
import diagrams from '../../../assets/diagrams.png';
import befunky from '../../../assets/befunky.jpeg';
import hatchful from '../../../assets/hatchful.png';
import figma from '../../../assets/figma.png';
import unsplash from '../../../assets/unsplash.png';
import codewars from '../../../assets/codewars.png';
import codingame from '../../../assets/codingame.png';
import typeofnan from '../../../assets/typeofnan.jpeg';
import leetcode from '../../../assets/leetcode.png';
import repl from '../../../assets/repl.png';
import codepen from '../../../assets/codepen.png';
import generatedata from '../../../assets/generatedata.png';
import sqlzoo from '../../../assets/sqlzoo.jpeg';
import studytonight from '../../../assets/studytonight.png';

import './ThingsILike.scss';
import _ from 'lodash';

function ThingsILike() {
  var topics = [
    {
      name: 'REGEX', 
      key: 'regex',
      links: [
        {name: 'REGEX', url: 'https://www.sitepoint.com/learn-regex/', image: regex},
        {name: 'REGEX', url: 'https://regexone.com/', image: regex},
        {name: 'REGEX', url: 'https://regex101.com/', image: regex},
      ]
    },
    {
      name: 'CSS', 
      key: 'css',
      links: [
        {name: 'paletton', url: 'https://paletton.com', image: platton},
        {name: 'mui', url: 'https://mui.com/', image: mui},
        {name: 'coolors', url: 'https://coolors.co', image: coolors},
        {name: 'freecodecamp', url: 'https://www.freecodecamp.org/learn/responsive-web-design/basic-css/', image: freecodecamp},
        {name: 'flexboxfroggy', url: 'https://flexboxfroggy.com/', image: flexboxfroggy},
        {name: 'flexboxdefense', url: 'http://www.flexboxdefense.com/', image: flexboxdefense},
        {name: 'cssgridgarden', url: 'http://cssgridgarden.com/', image: gridgarden},
        {name: 'flukeout', url: 'https://flukeout.github.io/', image: flukeout},
        {name: 'w3schools', url: 'https://www.w3schools.com/css/exercise.asp', image: w3logo},
        {name: 'w3resource', url: 'https://www.w3resource.com/html-css-exercise/main-html-css-exercises.php', image: w3resource},
        {name: 'practity', url: 'https://practity.com/481-2/', image: practity},
        {name: 'grid', url: 'https://grid.malven.co/', image: grid},
        {name: 'animejs', url: 'https://animejs.com/documentation/#timelineOffsets', image: animejs},
      ]
    },
    {
      name: 'Tutorials', 
      key: 'tutorials',
      links: [
        {name: 'freecodecamp', url: 'https://www.freecodecamp.org/learn/', image: freecodecamp},
      ]
    },
    {
      name: 'JavaScript', 
      key: 'javascript',
      links: [
        {name: 'ECMAScript', url: 'https://github.com/daumann/ECMAScript-new-features-list', image: ecmascript},
        {name: 'frontendmasters', url: 'https://frontendmasters.com/books/', image: frontendmasters},
        {name: 'stateofjs', url: 'https://stateofjs.com/', image: stateofjs},
        {name: 'semver', url: 'https://semver.npmjs.com/', image: npmjs},
        {name: 'elevatorsaga', url: 'https://play.elevatorsaga.com/', image: elevatorsaga},
        {name: 'cambiaresearch', url: 'https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes', image: ecmascript},
        {name: 'scrimba', url: 'https://scrimba.com/learn/learnreact', image: react},
        {name: 'lodash', url: 'https://lodash.com/', image: lodash},
      ]
    },
    {
      name: 'API', 
      key: 'api',
      links: [
        {name: 'API', url: 'https://www.youtube.com/watch?v=pKd0Rpw7O48', image: youtube},
        {name: 'pokeapi', url: 'https://pokeapi.co/', image: pokeapi},
        {name: 'sitepoint', url: 'https://www.sitepoint.com/understanding-module-exports-exports-node-js/', image: sitepoint},
        {name: 'public-apis', url: 'https://public-apis.xyz/', image: stateofjs},
        {name: 'jsonplaceholder', url: 'https://jsonplaceholder.cypress.io/', image: npmjs},
        {name: 'API', url: 'https://www.youtube.com/watch?v=pKd0Rpw7O48', image: youtube},
        {name: 'loom', url: 'www.loom.com', image: loom},
        {name: 'websocket', url: 'websocket.com', image: websocket},
        {name: 'dog-api', url: 'dog.ceo/dog-api', image: dogapi},
        {name: 'swapi', url: 'https://swapi.dev/', image: swapi},
        {name: 'randomuser', url: 'https://randomuser.me/', image: randomuser},
      ]
    },
    {
      name: 'Markup', 
      key: 'markup',
      links: [
        {name: 'stackedit', url: 'https://stackedit.io/', image: stackedit},
      ]
    },
    { 
      name: 'Typing', 
      key: 'typing',
      links: [
        {name: 'typingclub',url: 'https://www.typingclub.com/sportal/program-3.game', image: typingclub},
      ]
    },
    { 
      name: 'Design', 
      key: 'design',
      links: [
        {name: 'diagrams',url: 'https://app.diagrams.net', image: diagrams},
        {name: 'befunky',url: 'https://www.befunky.com/create/resize-image/', image: befunky},
        {name: 'hatchful',url: 'https://hatchful.shopify.com/', image: hatchful},
        {name: 'figma',url: 'https://www.figma.com/', image: figma},
      ]
    },
    { 
      name: 'Pictures', 
      key: 'pictures',
      links: [
        {name: 'unsplash', url: 'https://unsplash.com/', image: unsplash},
      ]
    },
    {
      name: 'Practice Coding', 
      key: 'practiceCoding',
      links: [
        {name: 'codewars', url: 'https://www.codewars.com/?language=javascript', image: codewars},
        {name: 'codingame', url: 'https://www.codingame.com/home', image: codingame},
        {name: 'typeofnan', url: 'https://quiz.typeofnan.dev/', image: typeofnan},
        {name: 'w3schools', url: 'https://www.w3schools.com/cert/default.asp', image: w3logo},
        {name: 'freecodecamp', url: 'https://www.freecodecamp.org/learn/', image: freecodecamp},
        {name: 'leetcode', url: 'https://leetcode.com/', image: leetcode},
      ]
    },
    {
      name: 'Language Shell', 
      key: 'languageShell',
      links: [
        {name: 'repl', url: 'https://repl.it/', image: repl},
        {name: 'codepen', url: 'https://codepen.io/pen/', image: codepen},
      ]
    },
    {
      name: 'Generate Data', 
      key: 'generateData',
      links: [
        {name: 'generatedata', url: 'https://www.generatedata.com/', image: generatedata},
      ]
    },
    {
      name: 'SQL', 
      key: 'sql',
      links: [
        {name: 'sqlzoo', url: 'https://sqlzoo.net/', image: sqlzoo},
        {name: 'studytonight', url: 'https://www.studytonight.com/dbms/first-normal-form.php', image: studytonight},
      ]
    },
  ];

  var [topicSelected, setTopicSelected] = useState('regex');

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