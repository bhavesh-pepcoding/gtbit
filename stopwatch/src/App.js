import './App.css';
import React from 'react';
import Counter from './containers/counter/counter';
import StopWatch from './containers/stopwatch/stopwatch';
import Theme from './containers/context/context';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showCounter: true
    }
  }
  render() {
    return (
      <div className="App">
        {/* <button onClick={() => {this.setState({showCounter: false})}}>StopWatch</button>
        {this.state.showCounter ? <Counter /> : <StopWatch />} */}
      <Theme></Theme>
        
      </div>
    );
  }
  
}

export default App;
