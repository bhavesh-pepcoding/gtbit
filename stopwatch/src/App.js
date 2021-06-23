import './App.css';
import React from 'react';
import StopWatch from './containers/stopwatch/stopwatch';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <StopWatch />
      </div>
    );
  }
  
}

export default App;
