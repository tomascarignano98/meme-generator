import React from 'react';

import logo from '../logo.svg';
import '../App.css';

class Loading extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false
    };
  }

  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default Loading;
