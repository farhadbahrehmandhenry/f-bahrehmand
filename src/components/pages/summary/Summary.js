import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import platformImage from '../../../assets/platform.png';
import hills from '../../../assets/hills.png';
import background from '../../../assets/background.png';
import runLeft from '../../../assets/spriteRunLeft.png';
import runRight from '../../../assets/spriteRunRight.png';
import standLeft from '../../../assets/spriteStandLeft.png';
import standRight from '../../../assets/spriteStandRight.png';
import Tree from './Tree';
import './Summary.scss';

class Player {
  constructor({context, platforms, genericObjects, scrollOffset}) {
    this.position = {
      x: 50, 
      y: 50
    }
    this.velocity = {
      x: 0,
      y: 1
    }
    this.height = 150;
    this.width = 66;
    this.gravity = 1;
    this.context = context;
    this.update = this.update.bind(this);
    this.platforms = platforms;
    this.genericObjects = genericObjects;
    this.frame = 0;
    this.scrollOffset = scrollOffset;
    this.createImage = this.createImage.bind(this);
    this.sprites = {
      stand: {
        right: standRight,
        left: standLeft,
        cropWidth: 177,
        width: 66
      },
      run: {
        right: runRight,
        left: runLeft,
        cropWidth: 341,
        width: 127.875
      }
    }
    this.cropWidth = this.sprites.stand.cropWidth;
    this.currentStripe = this.createImage(this.sprites.stand.right);
  }

  createImage(imageSrc) {
    var image = new Image();
    image.src = imageSrc;
    return image
  }

  draw() {
    var {position} = this;  

    if (this.context.direction) {
      _.forEach(this.genericObjects, genericObject => genericObject.draw());
      _.forEach(this.platforms, platform => platform.draw());

      this.context.drawImage(
        this.currentStripe, 
        this.cropWidth * this.frame, 
        0, 
        this.cropWidth, 
        400, 
        position.x, position.y, this.width, this.height)
    }
  }

  clearPlayer() {
    this.context.clearRect(0, 0, 1024, 520);
    this.scrollOffset = 0;
  }

  update({width, height, keys}) {
    requestAnimationFrame(() => this.update({width, height, keys}));
    this.frame++;

    if (this.frame > 28) this.frame = 0;
    if (this.context.canvas) {
      this.context.fillStyle = 'black';
      this.context.fillRect(0, 0, width, height);
    }

    this.draw();
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;

    if (this.position.y + this.height + this.velocity.y <= height) {
      this.velocity.y += this.gravity;
    }
    else {
      this.velocity.y = 0;
    }

    if (keys.right.pressed && this.position.x < 400) this.velocity.x = 5;
    else if (keys.up.pressed && this.position.y < -100) this.velocity.y = 1;
    else if ((keys.left.pressed && this.position.x > 100) || (keys.left.pressed && this.scrollOffset === 0 && this.position.x > 0) || (keys.right.pressed && this.scrollOffset > 3600 && this.position.x > 0)) this.velocity.x = -5;
    else {
      this.velocity.x = 0;

      if (keys.right.pressed) {
        this.scrollOffset = this.scrollOffset + 5;
        _.forEach(this.platforms, platform => platform.position.x -= 5);
        _.forEach(this.genericObjects, genericObject => genericObject.position.x -= 3);
      }
      else if (keys.left.pressed && this.scrollOffset > 0) {
        this.scrollOffset = this.scrollOffset - 5;
        _.forEach(this.platforms, platform => platform.position.x += 5);
        _.forEach(this.genericObjects, genericObject => genericObject.position.x += 3);
      } 
    }

    _.forEach(this.platforms, platform => {
      if (this.position.y + this.height <= platform.position.y && this.position.y + this.height + this.velocity.y >= platform.position.y && this.position.x + this.width >= platform.position.x && this.position.x <= platform.position.x + platform.width) {
        this.velocity.y = 0;
        platform.draw(40)
      }
    });

    if (this.position.y > 600) {
    }

    if (this.scrollOffset > 3600) {

    }
  }
}
class Platform {
  constructor({context, position, text, font, image}) {
    this.position = position;
    this.context = context;
    this.image = image;
    this.height = 125;
    this.width = 580;
    this.text = text;
    this.font = font;
  }

  draw(x = false) {
    var {position, width, height, text} = this;
    if (x) {
      this.context.fillStyle = '#3674B5';
      this.context.fillRect(position.x, position.y, 580, 125);
      this.context.fillStyle = 'black';
      this.context.font = this.font;
      this.context.fillText(text, position.x+ 15, position.y+ (height / 2));
    }
    else {
      this.context.drawImage(this.image, position.x, position.y)
    }
  }
}
class GenericObject {
  constructor({context, image}) {
    this.position = {x: 0, y: 0};
    this.context = context;
    this.image = image;
    this.height = image.height;
    this.width = image.width;
  }

  draw() {
    var {position} = this;
    this.context.drawImage(this.image, position.x, position.y)
  }
}
class Summary extends React.Component {
  constructor() {
    super();

    this.canvas = React.createRef();
    this.player = {};
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.scrollOffset = 0;
    this.state = {
      canvas: {}
    }
  }

  componentDidMount() {
    if (window.innerWidth > 1400) {
      var canvas = this.canvas;
      canvas.current.width = 1024; //this.summary.current.offsetWidth;
      canvas.current.height = 520; //this.summary.current.offsetHeight;
      var context =  this.canvas.current.getContext('2d');
  
      var createImage = (imageSrc) => {
        var image = new Image();
        image.src = imageSrc;
        return image
      }
  
      var platforms = [
        new Platform({context: context, position: {x: 0, y: 420}, text: 'Jump(W) - Forward(D) - Backward(A)', font: '1.5rem Arial', image: createImage(platformImage)}), 
        new Platform({context: context, position: {x: 1100, y: 100}, text: 'Front End', font: '1.5rem Arial', image: createImage(platformImage)}), 
        new Platform({context: context, position: {x: 1100, y: 300}, text: 'Back End', font: '1.5rem Arial', image: createImage(platformImage)}), 
        new Platform({context: context, position: {x: 1600, y: 400}, text: 'AWS, Python, API, Express, CICD, ...', font: '1.5rem Arial', image: createImage(platformImage)}), 
        new Platform({context: context, position: {x: 1600, y: 200}, text: 'HTML, CSS, React, Redux, ...', font: '1.5rem Arial', image: createImage(platformImage)}), 
        new Platform({context: context, position: {x: 700, y: 200}, text: 'Software Engineering', font: '1.5rem Arial', image: createImage(platformImage)}), 
  
        new Platform({context: context, position: {x: 2800, y: 300}, text: 'Integration & Unit testing', font: '1.5rem Arial', image: createImage(platformImage)}), 
        new Platform({context: context, position: {x: 2800, y: 100}, text: 'Automation', font: '1.5rem Arial', image: createImage(platformImage)}), 
        new Platform({context: context, position: {x: 3200, y: 400}, text: 'Jest, Jasmin, Mocha, Postman, ...', font: '1.5rem Arial', image: createImage(platformImage)}), 
        new Platform({context: context, position: {x: 3100, y: 200}, text: 'Cypress, Selenium, Apium, ...', font: '1.5rem Arial', image: createImage(platformImage)}), 
        new Platform({context: context, position: {x: 2400, y: 200}, text: 'Software Quality Engineering', font: '1.5rem Arial', image: createImage(platformImage)}), 
      ];
  
      var genericObjects = [
        new GenericObject({context: context, image: createImage(background)}), 
        new GenericObject({context: context, image: createImage(hills)}), 
      ]
  
      var player = new Player({context, platforms, genericObjects, scrollOffset: this.scrollOffset});
  
      var keys = {
        left: {
          pressed: false
        },
        right: {
          pressed: false
        },
        up: {
          pressed: false
        }
      }
  
      if (this.canvas.current) {
        player.update({width: this.canvas.current.width, height: this.canvas.current.height, keys: keys});
      }
  
      this.setState({canvas, player});
  
      window.addEventListener('keydown', ({key}) => this.handleKeyDown(key, keys));
      window.addEventListener('keyup', ({key}) => this.handleKeyUp(key, keys));
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown, false);
    window.removeEventListener('keyup', this.handleKeyUp, false);
  }

  createImage(imageSrc) {
    var image = new Image();
    image.src = imageSrc;
    return image
  }

  handleKeyDown(key, keys) {
    var {player} = this.state;

    switch(key) {
      case 'a':
        player.currentStripe = this.createImage(player.sprites.run.left);
        player.cropWidth = player.sprites.run.cropWidth;
        player.width = player.sprites.run.width;
        keys.left.pressed = true;
        break;
      case 's':
        break;
      case 'd':
        player.currentStripe = this.createImage(player.sprites.run.right);
        player.cropWidth = player.sprites.run.cropWidth;
        player.width = player.sprites.run.width;
        keys.right.pressed = true;
        break;
      case 'w':
        player.velocity.y -= 25;
        keys.up.pressed = true;
        break;
    }
  }

  handleKeyUp(key, keys) {
    var {player} = this.state;

    switch(key) {
      case 'a':
        player.currentStripe = this.createImage(player.sprites.stand.left);
        player.cropWidth = player.sprites.stand.cropWidth;
        player.width = player.sprites.stand.width;
        keys.left.pressed = false;
        break;
      case 's':
        break;
      case 'd':
        player.currentStripe = this.createImage(player.sprites.stand.right);
        player.cropWidth = player.sprites.stand.cropWidth;
        player.width = player.sprites.stand.width;
        keys.right.pressed = false;
        break;
      case 'w':
        break;
    }
  }

  render() {
    var {isOn} = this.props;

    const treeData = [
      {
        key: "0",
        label: "Software Engineer",
        icon: "fa fa-folder",
        title: "Software Engineer",
        children: [
          {
            key: "0-0",
            label: "Front End",
            icon: "fa fa-folder",
            title: "Front End",
            children: [
              {
                key: "0-1-1",
                label: "HTML",
                icon: "fa fa-file",
                title: "HTML",
              },
              {
                key: "0-1-1",
                label: "CSS",
                icon: "fa fa-file",
                title: "CSS",
              },
              {
                key: "0-1-1",
                label: "React",
                icon: "fa fa-file",
                title: "React",
              },
            ]
          },
          {
            key: "0-1",
            label: "Back End",
            icon: "fa fa-folder",
            title: "Back End",
            children: [
              {
                key: "0-1-1",
                label: "AWS",
                icon: "fa fa-file",
                title: "AWS",
              },
              {
                key: "0-1-2",
                label: "Python",
                icon: "fa fa-file",
                title: "Python",
              },
              {
                key: "0-1-3",
                label: "API",
                icon: "fa fa-file",
                title: "API",
              },
              {
                key: "0-1-4",
                label: "SQL",
                icon: "fa fa-file",
                title: "SQL",
              },
            ],
          },
        ],
      },
      {
        key: "1",
        label: "Software Quality Engineer",
        icon: "fa fa-desktop",
        title: "Software Quality Engineer",
        children: [
          {
            key: "1-0",
            label: "Automation",
            icon: "fa fa-file",
            title: "Automation",
          },
          {
            key: "0-0",
            label: "Integration and Unit tests",
            icon: "fa fa-file",
            title: "Integration and Unit tests",
          },
        ],
      }
    ];

    return (
      <div className={`Summary ${isOn}`} ref={elem => this.summary = elem}>
        {(_.includes(['onGoing', 'on'], isOn) && this.props.channel === 2 && window.innerWidth > 1400) ?
          <canvas ref={this.canvas}/>
           :
          <>
            <div className="row">
              <div className="col text-center">
                <div className="mt-3">
                  <div className="row mt-3 d-flex justify-content-center">
                    <div className="col-lg-8 text-left text-dark">
                      <Tree data={treeData} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        }
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return { 
    isOn: store.power.isOn,
    channel: store.channel.channel, 
    currentItem: store.currentItem
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    switchChannel: (channel) => dispatch({ type: 'switchChannel', payload: channel }),
    updateCurrentItem: (item) => dispatch({ type: 'updateCurrentItem', payload: item }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
