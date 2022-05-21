import React, {useState, useEffect} from 'react';
import Card from './Card';
import calculator from '../../../assets/calc.png';
import classImg from '../../../assets/class.png';
import exchange from '../../../assets/exchange.png';
import expense from '../../../assets/expense.png';
import flash from '../../../assets/flash.png';
import flip from '../../../assets/flip.png';
import form from '../../../assets/form.png';
import fullPageScroll from '../../../assets/full-page-scroll.png';
import hangman from '../../../assets/hangman.png';
import infinite from '../../../assets/infinite-scroll.png';
import infiniteTwo from '../../../assets/infinite-2.png';
import meal from '../../../assets/meal.jpg';
import modal from '../../../assets/modal.png';
import music from '../../../assets/music.png';
import movie from '../../../assets/movie.png';
import navbar from '../../../assets/navbar.png';
import navbarTwo from '../../../assets/navbar-2.png';
import parallex from '../../../assets/parallex.png';
import progress from '../../../assets/progress.png';
import search from '../../../assets/search.png';
import speech from '../../../assets/speech.png';
import textAnimation from '../../../assets/text.png';
import typing from '../../../assets/typing.png';
import video from '../../../assets/video.png';
import lyric from '../../../assets/lyric.png';
import breath from '../../../assets/breathing.png';
import pingPong from '../../../assets/ping-pong.png';
import newYear from '../../../assets/year.png';
import sortableList from '../../../assets/sortable-list.png';
import guessNumber from '../../../assets/guess-number.png';
import quote from '../../../assets/quoting.png';
import pictureInPicture from '../../../assets/pictureInPicture.png';
import joke from '../../../assets/joke.png';
import lightDark from '../../../assets/light-dark.png';
import videoBackground from '../../../assets/video-background.png';
import rockPaperScissors from '../../../assets/rock-paper-scissors.png';
import nasa from '../../../assets/nasa.png';
import kanban from '../../../assets/kanban.png';
import expand from '../../../assets/expand.png';
import steps from '../../../assets/steps.png';
import land from '../../../assets/land.jpg';
import blurry from '../../../assets/blurry.jpg';
import scrollAnimation from '../../../assets/scroll-animation.png';
import split from '../../../assets/split.png';
import formTwo from '../../../assets/formTwo.png';
import faq from '../../../assets/faq.png';
import randomPicker from '../../../assets/random-picker.png';
import animatedNav from '../../../assets/animated-nav.png';
import water from '../../../assets/water.png';
import movieDb from '../../../assets/movie-db.png';
import backgroundSlider from '../../../assets/background-slider.png';
import clock from '../../../assets/clock.png';
import click from '../../../assets/click-effect.png';
import drawingPad from '../../../assets/drawingPad.png';
import loading from '../../../assets/loading.png';
import tables from '../../../assets/table.png';

import './ThingsILike.scss';
import _ from 'lodash';

function ThingsILike() {
  var topics = [
    {
      name: 'Vanila JavaScript Projects', 
      key: 'vanila',
      links: [
        {
          name: 'Basic Calculator', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/calculator-ok/index.html', 
          image: calculator
        },
        {
          name: 'Exchange Calculator', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/exchange-rate-calculator-ok/index.html', 
          image: exchange
        },
        {
          name: 'Expense Tracker', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/expense-tracker-ok/index.html', 
          image: expense
        },
        {
          name: 'Flash Card', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/flash-card-ok/index.html', 
          image: flash
        },
        {
          name: 'Flip Card', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/flip-card-ok/index.html', 
          image: flip
        },
        {
          name: 'Form', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/form-ok/index.html', 
          image: form
        },
        {
          name: 'Form 2', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/form-2-ok/index.html', 
          image: formTwo
        },
        {
          name: 'Full Page Scroll Effect', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/full-page-scroll-effect-ok/index.html', 
          image: fullPageScroll
        },
        {
          name: 'Hangman', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/hangman-ok/index.html', 
          image: hangman
        },
        {
          name: 'Infinite Scroll', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/infinite-scrolling-ok/index.html', 
          image: infinite
        },
        {
          name: 'Infinite Scroll 2', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/infinite-scrolling-2-ok/index.html', 
          image: infiniteTwo
        },
        {
          name: 'Meal Finder', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/meal-finder-ok/index.html', 
          image: meal
        },
        {
          name: 'Popup Modal', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/modal-ok/index.html', 
          image: modal
        },
        {
          name: 'Music Player', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/music-player-ok/index.html', 
          image: music
        },
        {
          name: 'Movie Seat Booking', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/movie-seat-booking-app-ok/index.html', 
          image: movie
        },
        {
          name: 'Simple Navbar', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/navbar-ok/index.html', 
          image: navbar
        },
        {
          name: 'Simple Navbar 2', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/navbar-2-ok/index.html', 
          image: navbarTwo
        },
        {
          name: 'Simple Navbar 3', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/land-page-ok/index.html', 
          image: land
        },
        {
          name: 'Parallex Effect', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/parallex-effect-ok/index.html', 
          image: parallex
        },
        {
          name: 'Progress Bar', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/progress-bar-ok/index.html', 
          image: progress
        },
        {
          name: 'Search Bar', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/search-bar-ok/index.html', 
          image: search
        },
        {
          name: 'Search Text Reader', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/speech-text-reader-ok/index.html', 
          image: speech
        },
        {
          name: 'Text Animation', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/text-animation-ok/index.html', 
          image: textAnimation
        },
        {
          name: 'Typing Game', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/typing-game-ok/index.html', 
          image: typing
        },
        {
          name: 'Video Player', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/video-player-ok/index.html', 
          image: video
        },
        {
          name: 'Video Background', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/video-background-ok/index.html', 
          image: videoBackground
        },
        {
          name: 'Lyric Finder', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/lyric-finder-ok/index.html', 
          image: lyric
        },
        {
          name: 'Breathing App', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/breathe-ok/index.html', 
          image: breath
        },
        {
          name: 'Ping Pong', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/ping-pong-ok/index.html', 
          image: pingPong
        },
        {
          name: 'New Year Countdown', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/new-year-ok/index.html', 
          image: newYear
        },
        {
          name: 'Sortable List', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/sortable-list-ok/index.html', 
          image: sortableList
        },
        {
          name: 'Guess the Numebr', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/guess-the-number-ok/index.html', 
          image: guessNumber
        },
        {
          name: 'Quote Generator', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/quote-generator-ok/index.html', 
          image: quote
        },
        {
          name: 'Picture In Picture', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/picture-in-picture-ok/index.html', 
          image: pictureInPicture
        },
        {
          name: 'Joke Teller', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/joke-teller-ok/index.html', 
          image: joke
        },
        {
          name: 'Light Dark Mode', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/light-dark-mode-ok/index.html', 
          image: lightDark
        },
        {
          name: 'Rock Paper Scissors', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/rock-paper-scissors-ok/index.html', 
          image: rockPaperScissors
        },
        {
          name: 'NASA', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/nasa-ok/index.html', 
          image: nasa
        },
        {
          name: 'KANBAN', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/kanban-ok/index.html', 
          image: kanban
        },
        {
          name: 'Expandig Pics', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/expanding-pic-ok/index.html', 
          image: expand
        },
        {
          name: 'Steps', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/steps-ok/index.html', 
          image: steps
        },
        {
          name: 'Blurry Loading', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/blurry-ok/index.html', 
          image: blurry
        },
        {
          name: 'Scroll Animation', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/scroll-animation-ok/index.html', 
          image: scrollAnimation
        },
        {
          name: 'Split Landing', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/split-ok/index.html', 
          image: split
        },
        {
          name: 'FAQ', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/faq-ok/index.html', 
          image: faq
        },
        {
          name: 'Random Picker', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/random-picker-ok/index.html', 
          image: randomPicker
        },
        {
          name: 'Animated Navigation', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/animated-navigation-ok/index.html', 
          image: animatedNav
        },
        {
          name: 'Water', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/water-ok/index.html', 
          image: water
        },
        {
          name: 'Movie DB', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/movie-db-ok/index.html', 
          image: movieDb
        },
        {
          name: 'Background Slider', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/background-slider-ok/index.html', 
          image: backgroundSlider
        },
        {
          name: 'Clock', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/clock-ok/index.html', 
          image: clock
        },
        {
          name: 'Click Effect', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/click-effect-ok/index.html', 
          image: click
        },
        {
          name: 'Drawing Pad', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/drawing-pad-ok/index.html', 
          image: drawingPad
        },
        {
          name: 'Loading', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/loading-ok/index.html', 
          image: loading
        },
        {
          name: 'Tables', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/projects/table-ok/index.html', 
          image: tables
        },
      ]
    },
    { 
      name: 'Tutorials', 
      key: 'tutorials',
      links: [
        {
          name: 'Class', 
          url: 'https://farhadbahrehmandhenry.github.io/project-vanilla-js/configs/class-ok/index.html', 
          image: classImg
        },   
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