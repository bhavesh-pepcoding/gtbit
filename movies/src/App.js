import './App.css';
import React from 'react';
import MoviesList from './containers/moviesList/moviesList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MoviesList />
      </div>
    );
  }
  
}


export default App;
