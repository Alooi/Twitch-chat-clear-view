import logo from './logo.svg';
import ComfyJS from 'comfy.js';
import {useState} from 'react';
import twitchIcon from './Assets/twitch_icon.png';
import './home.css';
import tracker from './tracker';
import count from './count';
import {XYPlot, HorizontalBarSeries, AbstractSeries, XAxis, YAxis,LabelSeries} from 'react-vis';
import 'antd/dist/antd.css';
import {Slider} from 'antd';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={twitchIcon} className='App-logo'/>
        <h1>Twitch Chat Clear View</h1>
      </header>
        <h3>please use twitch-chat-clear-view/oneword or twitch-chat-clear-view/fivewords in your OBS browser source</h3>
        <p>version 0.2</p>
    </div>
  );
}

export default App;
