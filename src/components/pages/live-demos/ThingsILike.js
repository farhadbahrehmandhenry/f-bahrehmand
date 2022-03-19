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
          url: 'https://farhadbahrehmandhenry.github.io/vanila-js-projects/projects/calculator-ok/index.html', 
          image: calculator
        },
        {
          name: 'Exchange Calculator', 
          url: 'https://farhadbahrehmandhenry.github.io/vanila-js-projects/projects/exchange-rate-calculator-ok/index.html', 
          image: exchange
        },
        {
          name: 'Expense Tracker', 
          url: 'https://farhadbahrehmandhenry.github.io/vanila-js-projects/projects/expense-tracker-ok/index.html', 
          image: expense
        },
        {
          name: 'Flash Card', 
          url: 'https://farhadbahrehmandhenry.github.io/vanila-js-projects/projects/flash-card-ok/index.html', 
          image: flash
        },
        {
          name: 'Flip Card', 
          url: 'https://farhadbahrehmandhenry.github.io/vanila-js-projects/projects/flip-card-ok/index.html', 
          image: flip
        },
        {
          name: 'Form', 
          url: 'https://farhadbahrehmandhenry.github.io/vanila-js-projects/projects/form-ok/index.html', 
          image: form
        },
        {
          name: 'Full Page Scroll Effect', 
          url: 'https://farhadbahrehmandhenry.github.io/vanila-js-projects/projects/full-page-scroll-effect-ok/index.html', 
          image: fullPageScroll
        },
        {
          name: 'Hangman', 
          url: 'https://farhadbahrehmandhenry.github.io/vanila-js-projects/projects/hangman-ok/index.html', 
          image: hangman
        },
        {
          name: 'Infinite Scroll', 
          url: 'https://farhadbahrehmandhenry.github.io/vanila-js-projects/projects/infinite-scrolling-ok/index.html', 
          image: infinite
        },
        {
          name: 'Infinite Scroll 2', 
          url: 'https://farhadbahrehmandhenry.github.io/vanila-js-projects/projects/infinite-scrolling-2-ok/index.html', 
          image: infiniteTwo
        },
        {
          name: 'Meal Finder', 
          url: 'https://farhadbahrehmandhenry.github.io/vanila-js-projects/projects/meal-finder-ok/index.html', 
          image: meal
        },
        {
          name: 'Popup Modal', 
          url: 'https://farhadbahrehmandhenry.github.io/vanila-js-projects/projects/modal-ok/index.html', 
          image: modal
        },
        {
          name: 'Music Player', 
          url: 'https://farhadbahrehmandhenry.github.io/vanila-js-projects/projects/music-player-ok/index.html', 
          image: music
        },
        {
          name: 'Movie Seat Booking', 
          url: 'https://farhadbahrehmandhenry.github.io/vanila-js-projects/projects/movie-seat-booking-app-ok/index.html', 
          image: movie
        },
        {
          name: 'Simple Navbar', 
          url: 'https://farhadbahrehmandhenry.github.io/vanila-js-projects/projects/navbar-ok/index.html', 
          image: navbar
        },
        {
          name: 'Parallex Effect', 
          url: 'https://farhadbahrehmandhenry.github.io/vanila-js-projects/projects/parallex-effect-ok/index.html', 
          image: parallex
        },
        {
          name: 'Progress Bar', 
          url: 'https://farhadbahrehmandhenry.github.io/vanila-js-projects/projects/progress-bar-ok/index.html', 
          image: progress
        },
        {
          name: 'Search Bar', 
          url: 'https://farhadbahrehmandhenry.github.io/vanila-js-projects/projects/search-bar-ok/index.html', 
          image: search
        },
        {
          name: 'Search Text Reader', 
          url: 'https://farhadbahrehmandhenry.github.io/vanila-js-projects/projects/speech-text-reader-ok/index.html', 
          image: speech
        },
        {
          name: 'Text Animation', 
          url: 'https://farhadbahrehmandhenry.github.io/vanila-js-projects/projects/text-animation-ok/index.html', 
          image: textAnimation
        },
        {
          name: 'Typing Game', 
          url: 'https://farhadbahrehmandhenry.github.io/vanila-js-projects/projects/typing-game-ok/index.html', 
          image: typing
        },
        {
          name: 'Video Player', 
          url: 'https://farhadbahrehmandhenry.github.io/vanila-js-projects/projects/video-player-ok/index.html', 
          image: video
        },
        {
          name: 'Lyric Finder', 
          url: 'https://farhadbahrehmandhenry.github.io/vanila-js-projects/projects/lyric-finder-ok/index.html', 
          image: lyric
        },
        {
          name: 'Breathing App', 
          url: 'https://farhadbahrehmandhenry.github.io/vanila-js-projects/projects/breathe-ok/index.html', 
          image: breath
        },
        {
          name: 'Ping Pong', 
          url: 'https://farhadbahrehmandhenry.github.io/vanila-js-projects/projects/ping-pong-ok/index.html', 
          image: pingPong
        },
        {
          name: 'New Year Countdown', 
          url: 'https://farhadbahrehmandhenry.github.io/vanila-js-projects/projects/new-year-ok/index.html', 
          image: newYear
        },
        {
          name: 'Sortable List', 
          url: 'https://farhadbahrehmandhenry.github.io/vanila-js-projects/projects/sortable-list-ok/index.html', 
          image: sortableList
        },
        {
          name: 'Guess the Numebr', 
          url: 'https://farhadbahrehmandhenry.github.io/vanila-js-projects/projects/guess-the-number-ok/index.html', 
          image: guessNumber
        },
        {
          name: 'Quote Generator', 
          url: 'https://farhadbahrehmandhenry.github.io/vanila-js-projects/projects/quote-generator-ok/index.html', 
          image: quote
        },
        {
          name: 'Picture In Picture', 
          url: 'https://farhadbahrehmandhenry.github.io/vanila-js-projects/projects/picture-in-picture-ok/index.html', 
          image: pictureInPicture
        },
        {
          name: 'Joke Teller', 
          url: 'https://farhadbahrehmandhenry.github.io/vanila-js-projects/projects/joke-teller-ok/index.html', 
          image: joke
        },
      ]
    },
    { 
      name: 'Tutorials', 
      key: 'tutorials',
      links: [
        {
          name: 'Class', 
          url: 'https://farhadbahrehmandhenry.github.io/vanila-js-projects/configs/class-ok/index.html', 
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