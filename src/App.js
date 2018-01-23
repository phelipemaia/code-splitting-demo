import React, { Component } from 'react';
import './App.css';

class App extends Component {
  handleClickA = () => {
    import('./moduleA')
      .then(({ moduleA }) => {
        // Use moduleA
      })
      .catch(err => {
        // Handle failure
      });
  };

  handleClickB = () => {
    import('./moduleB')
      .then(({ moduleB }) => {
        // Use moduleB
      })
      .catch(err => {
        // Handle failure
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClickA}>Load A</button>
        <button onClick={this.handleClickB}>Load B</button>
      </div>
    );
  }
}

export default App;
