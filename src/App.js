import logo from './logo.svg';
import ComfyJS from 'comfy.js';
import {useState} from 'react';
import './App.css';
import tracker from './tracker';
import {XYPlot, HorizontalBarSeries, AbstractSeries, XAxis, YAxis,LabelSeries} from 'react-vis';
ComfyJS.Init("aladdintwisted");
var counter = 0;


function App() {
  var data = []
  const [message, setMessage] = useState("");
  const [counter, setCounter] = useState(0);
  const [counters, setcounters] = useState({})
  ComfyJS.onChat = (user, message) => {
    setCounter(counter + 1);
    setMessage(message);
    tracker(message,counters,setcounters);
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
  return (
    <div className="App">
      <header className="App-header">
        <text>enter your user name</text>
        <p>{message}</p>
        <XYPlot height={400} width={600}>
          <HorizontalBarSeries data={data}/>
          <LabelSeries data={data} animation/>
          <XAxis/>
        </XYPlot>
        <p>{getHighest()}</p>
        <button onClick={()=>{setcounters({})}}>reset</button>
      </header>
      
    </div>
  );
}

export default App;
