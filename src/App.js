import React, {Component} from 'react';
import './css/App.css';
import Nav from './component/Nav.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav />
        </header>
      </div>
    );
  }
}

export default App;
