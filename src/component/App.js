import React, {Component} from 'react';
import '../css/App.css';

import Header from './Header';
import Modal from './Modal';
import Hero from './Hero';

class App extends Component {

  state = {
    hideModal: true,
    command: ''
  }

  showModal = (command) => {
    const hideModal = false;
    this.setState({hideModal, command});
  }

  closeModal = () => {
    const hideModal = true;
    this.setState({hideModal});
  }

  loginSuccessful = () => {
    this.props.history.replace('/dashboard');
  }

  render() {
    return (
      <div>
        <Header isLoggedIn={false} showModal={this.showModal} />
        <Modal hideModal={this.state.hideModal} command={this.state.command} closeModal={this.closeModal} loginSuccessful={this.loginSuccessful} />
        <Hero />
      </div>
    );
  }
}

export default App;
