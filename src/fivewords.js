import logo from './logo.svg';
import ComfyJS from 'comfy.js';
import {useState} from 'react';
import twitchIcon from './Assets/twitch_icon.png';
import './style.css';
import tracker from './tracker';
import count from './count';
import {XYPlot, HorizontalBarSeries, AbstractSeries, XAxis, YAxis,LabelSeries} from 'react-vis';
import 'antd/dist/antd.css';
import {Slider} from 'antd';

var counter = 0;
var data = [];
var messages = [];
var height = 400;
var width = window.innerWidth/2;


function App() {
  const [limit, setlimit] = useState(100);
  const [message, setMessage] = useState("");
  const [channel, setchannel] = useState("");
  const [start, setstart] = useState(false);
  const [counters, setcounters] = useState({})
  function handleInit(channel){
    setstart(true);
    ComfyJS.Init(channel);
    ComfyJS.onChat = (user, message) => {
      messages.push(message);
      count(messages,setcounters,limit);
      counter++;
      setMessage(message);
      // console.log(messages);
      // tracker(message,counters,setcounters,messages);
    }
  }
    
  function getHighest(){
    var items = Object.keys(counters).map(function(key) {
      return [key, counters[key]];
    });
    items.sort(function(first, second) {
      return second[1] - first[1];
    });
    // console.log(items.slice(0, 5));
    items = items.slice(0, 5)
    for (var i = 0; i < items.length; i++){
      data[i] = {x: items[i][1], y: i, label: items[i][0]}
      // console.log(items[i][0]);
    }
    // return (items)
  }
  if (start){
    return (
      <div className="Fivewords">
          {/* <p>latest Message: {message}</p> */}
          {/* <p>total number of comments: {messages.length}</p> */}
          <div className="graph">
            <XYPlot height={height} width={width}>
              <HorizontalBarSeries data={data}/>
              <LabelSeries data={data} animation/>
              <XAxis/>
            </XYPlot>
            {/* <Slider/> */}
            
          </div>
          <p>{getHighest()}</p>
          <div>
            {/* <button onClick={()=>{messages.length = 0}}>apply</button> */}
          </div>
      </div>
    );
  } else {
    return(
    <div className="Input">
      <label>
        Name:
        <input type="text" name="name" onChange={(value)=>{console.log(value.target.value);setchannel(value.target.value)}}/>
        <button onClick={()=>{handleInit(channel)}}>Track!</button>
      </label>
      <p>settings:</p>
      <label>
        frequency: {limit}
        <input type="number" onChange={(value)=>{setlimit(value.target.value)}}/>
      </label>
    </div>
    );
    
  }
  
}

export default App;