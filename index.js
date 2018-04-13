import React from 'react';
import ReactDOM from 'react-dom';
import Lottie from 'react-lottie';
import * as animationData from './data.json';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isStopped: false,
            isPaused: false
        };

        this.defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        renderer: 'canvas'
        };

        this.play = this.play.bind(this);
        this.stop = this.stop.bind(this);
        this.pause = this.pause.bind(this);
    }
  
    play() {
      this.setState({isStopped: false, isPaused: false});
    }

    stop() {
      this.setState({isStopped: true});
    }

    pause() {
      this.setState({isPaused: !this.state.isPaused});
    }

    render() {
        const buttonStyle = {
        display: 'block',
        margin: '10px auto'
        };

        return (<div>
        <Lottie
            options={this.defaultOptions}
            width={600}
            isStopped={this.state.isStopped}
            isPaused={this.state.isPaused}
        />
        <button style={buttonStyle} onClick={this.stop}>停止</button>
        <button style={buttonStyle} onClick={this.play}>播放</button>
        <button style={buttonStyle} onClick={this.pause}>暂停</button>
        </div>);
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));