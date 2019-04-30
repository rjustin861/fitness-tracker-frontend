import React, {Component} from 'react';
import './css/App.css';

import Header from './component/Header';
import Modal from './component/Modal';
import Hero from './component/Hero';

class App extends Component {
  state = {
    hidden: true,
    command: ''
  }

  show_modal = (command) => {
    let hidden = this.state.hidden;
    hidden = false;

    this.setState({hidden, command});
  }

  close_modal = () => {
    let hidden = this.state.hidden;
    hidden = true;

    this.setState({hidden});
  }

  render() {
    return (
      <div>
        <Header show_modal={this.show_modal} />
        <Modal hidden={this.state.hidden} command={this.state.command} close_modal={this.close_modal} />
        <Hero />
      </div>
    );
  }
}

export default App;
