import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import '../css/App.css';

import Header from './Header';
import Modal from './Modal';
import Hero from './Hero';

class App extends Component {
  state = {
    hideModal: true,
    isLoggedIn: false,
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

  performLogin = (e) => {
    e.preventDefault();

    //call API to login, if login successful, then set isLoggedIn to true
    this.setState({isLoggedIn: true});
  }

  performLogout = () => {
      //call API to logout, if logout successful, then set isLoggedIn to false
      this.setState({isLoggedIn: false});
  }

  render() {
    return (
      <div>
        {this.state.isLoggedIn && <Redirect to='/dashboard' />}
        <Header isLoggedIn={this.state.isLoggedIn} showModal={this.showModal} performLogout={this.performLogout} />
        <Modal hideModal={this.state.hideModal} command={this.state.command} closeModal={this.closeModal} performLogin={this.performLogin} />
        <Hero />
      </div>
    );
  }
}

export default App;
