import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import './Main.scss';

class Main extends React.Component {
  constructor() {
    super()

    this.ref = React.createRef();
    this.updateDimensions = this.updateDimensions.bind(this); //bind function once

    this.state = {
      width: 0,
      height: 0,
    }
  }

  componentDidMount () {
    this.setState({
      width: this.ref.current.clientWidth - 20 * 2,
      height: this.ref.current.clientHeight - 20 * 2,
    });

    window.addEventListener('resize', this.updateDimensions);
  } 

  componentWillUnmount() {
    // you need to unbind the same listener that was binded.
    window.removeEventListener('resize', this.updateDimensions, false);
  }

  updateDimensions = () => {
    if (this.props.channel === 1 && this.ref.current) {
      this.setState({
        width: this.ref.current.clientWidth - 20 * 2,
        height: this.ref.current.clientHeight - 20 * 2,
      });
    }
  };

  render() {
    var {width, height} = this.state;
    var numberOfSquaresInWidth = Math.floor(width / 20);
    var numberOfSquaresInHeight = Math.floor(height / 20) % 2 === 0 ? Math.floor(height / 20) - 1 : Math.floor(height / 20);
    var numberOfSquares = numberOfSquaresInWidth * numberOfSquaresInHeight;
    var nameLetters = [];

    if (numberOfSquaresInWidth > 41 && numberOfSquaresInHeight > 11) {
      var nameStartPointX = Math.floor((numberOfSquaresInWidth - 23) / 2) - 1;
      var nameStartPointY = Math.floor((numberOfSquaresInHeight - 11) / 2) - 1;
      var nameStartPoint = (numberOfSquaresInWidth * nameStartPointY) + nameStartPointX;
      var lastNameStartPointX = Math.floor((numberOfSquaresInWidth - 41) / 2) + 1;
      var lastNameStartPointY = nameStartPointY + 6;
      var lastNameStartPoint = numberOfSquaresInWidth * lastNameStartPointY + lastNameStartPointX;
  
      nameLetters = [
        {key: 'f', points: [], startPoint: nameStartPoint, activeIndices: [0, 1, 2, 3, 4, 5, 7, 10], topLeft: [0], topRight: [7, 10], bottomLeft: [4], bottomRight: [4, 7, 10]},
        {key: 'a1', points: [], startPoint: nameStartPoint + 4, activeIndices: [0, 1, 2, 3, 4, 5, 7, 10, 11, 12, 13, 14], topLeft: [0], topRight: [10], bottomLeft: [4, 14], bottomRight: [4, 14]},
        {key: 'r1', points: [], startPoint: nameStartPoint + 8, activeIndices: [0, 1, 2, 3, 4, 5, 7, 10, 11, 12, 13, 14], topLeft: [0], topRight: [10, 12], bottomLeft: [4, 14], bottomRight: [4, 11, 14]},
        {key: 'h1', points: [], startPoint: nameStartPoint + 12, activeIndices: [0, 1, 2, 3, 4, 7, 10, 11, 12, 13, 14], topLeft: [0, 10], topRight: [0, 10], bottomLeft: [4, 14], bottomRight: [4, 14]},
        {key: 'a2', points: [], startPoint: nameStartPoint + 16, activeIndices: [0, 1, 2, 3, 4, 5, 7, 10, 11, 12, 13, 14], topLeft: [0], topRight: [10], bottomLeft: [4, 14], bottomRight: [4, 14]},
        {key: 'd1', points: [], startPoint: nameStartPoint + 20, activeIndices: [0, 1, 2, 3, 4, 5, 9, 10, 11, 12, 13, 14], topLeft: [], topRight: [10], bottomLeft: [], bottomRight: [14]},
        {key: 'b', points: [], startPoint: lastNameStartPoint, activeIndices: [0, 1, 2, 3, 4, 5, 7, 9, 10, 11, 12, 13, 14], topLeft: [0], topRight: [10, 12], bottomLeft: [4], bottomRight: [11, 14]},
        {key: 'a3', points: [], startPoint: lastNameStartPoint + 4, activeIndices: [0, 1, 2, 3, 4, 5, 7, 10, 11, 12, 13, 14], topLeft: [0], topRight: [10], bottomLeft: [4, 14], bottomRight: [4, 14]},
        {key: 'h2', points: [], startPoint: lastNameStartPoint + 8, activeIndices: [0, 1, 2, 3, 4, 7, 10, 11, 12, 13, 14], topLeft: [0, 10], topRight: [0, 10], bottomLeft: [4, 14], bottomRight: [4, 14]},
        {key: 'r2', points: [], startPoint: lastNameStartPoint + 12, activeIndices: [0, 1, 2, 3, 4, 5, 7, 10, 11, 12, 13, 14], topLeft: [0], topRight: [10, 12], bottomLeft: [4, 14], bottomRight: [4, 11, 14]},
        {key: 'e', points: [], startPoint: lastNameStartPoint + 16, activeIndices: [0, 1, 2, 3, 4, 5, 7, 9, 10, 14], topLeft: [0], topRight: [10, 7, 14], bottomLeft: [4], bottomRight: [10, 7, 14]},
        {key: 'h3', points: [], startPoint: lastNameStartPoint + 20, activeIndices: [0, 1, 2, 3, 4, 7, 10, 11, 12, 13, 14], topLeft: [0, 10], topRight: [0, 10], bottomLeft: [4, 14], bottomRight: [4, 14]},
        {key: 'm', points: [], startPoint: lastNameStartPoint + 24, activeIndices: [0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15, 20, 21, 22, 23, 24], topLeft: [0], topRight: [20], bottomLeft: [4, 14, 24], bottomRight: [4, 14, 24]},
        {key: 'a4', points: [], startPoint: lastNameStartPoint + 30, activeIndices: [0, 1, 2, 3, 4, 5, 7, 10, 11, 12, 13, 14], topLeft: [0], topRight: [10], bottomLeft: [4, 14], bottomRight: [4, 14]},
        {key: 'n', points: [], startPoint: lastNameStartPoint + 34, activeIndices: [0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 14], topLeft: [0, 5], topRight: [10], bottomLeft: [4, 14], bottomRight: [4, 14]},
        {key: 'd2', points: [], startPoint: lastNameStartPoint + 38, activeIndices: [0, 1, 2, 3, 4, 5, 9, 10, 11, 12, 13, 14], topLeft: [], topRight: [10], bottomLeft: [], bottomRight: [14]}
      ];
  
      _.forEach(nameLetters, nameLetter => {
        var currentPoint = nameLetter.startPoint;
        var rowCellCount = numberOfSquaresInWidth;
        var points = []
        var culCount = nameLetter.key !== 'm' ? 3 : 5;
  
        _.forEach([...Array(culCount).keys()], n => points.push(currentPoint + n));
        _.forEach(points, p => {
          nameLetter.points.push(p);
  
          _.times(4, () => {
            nameLetter.points.push(p + rowCellCount);
            rowCellCount += numberOfSquaresInWidth;
          });
  
          rowCellCount = numberOfSquaresInWidth;
        });
      });
    }

    return (
      <div className={`main ${this.props.isOn}`} ref={this.ref}>
        <div className='square-container' style={{height: `${height}px`, width: `${width}px`}}>
          {_.map([...Array(numberOfSquares).keys()], (cell, index) => {
            if (_.includes(['on', 'onGoing'], this.props.isOn)) {
              if (!_.includes(_.flatten(_.map(nameLetters, 'points')), cell)) {
                var arr = [];
                while(arr.length < 30){
                  var r = Math.floor(Math.random() * numberOfSquares) + 1;
                  if(arr.indexOf(r) === -1) arr.push(r);
                }
    
                var style = _.includes(arr, cell) ? {animation: `others 5s ${Math.random() * 5}s infinite`} : {};

                return <div className='square' key={index} style={style}></div>
              }  
              else {
                var letter = _.find(nameLetters, letter => _.includes(letter.points, cell));
  
                if (_.includes(letter.activeIndices, _.indexOf(letter.points, cell))) {
                  var classNames = [`name ${this.props.isOn}`, letter.key];
    
                  if (_.includes(letter.topLeft, _.indexOf(letter.points, cell))) classNames.push('top-left');
                  if (_.includes(letter.topRight, _.indexOf(letter.points, cell))) classNames.push('top-right');
                  if (_.includes(letter.bottomLeft, _.indexOf(letter.points, cell))) classNames.push('bottom-left');
                  if (_.includes(letter.bottomRight, _.indexOf(letter.points, cell))) classNames.push('bottom-right');
    
                  return <div className={classNames.join(' ')} key={index}></div>
                }
                else {
                  return <div className='square' key={index} style={{opacity: 0}}></div>
                }
              }
            }
          })}
          {(nameLetters.length === 0 && _.includes(['on', 'onGoing'], this.props.isOn)) && <div className='my-name'>Farhad Bahrehmand</div>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return { 
    isOn: store.power.isOn,
    channel: store.channel.channel, 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)