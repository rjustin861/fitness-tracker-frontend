import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import './css/App.css';

import Header from './component/Header';
import Modal from './component/Modal';
import Hero from './component/Hero';

class App extends Component {
  state = {
    hidden: true,
    isLoggedIn: false,
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

  performLogin = (e) => {
    e.preventDefault();

    //call API to login, if login successful, then set isLoggedIn to true
    this.setState({isLoggedIn: true});
  }

  renderRedirect = () => {
    if (this.state.isLoggedIn) {
      return <Redirect to='/dashboard' />
    }
  }

  logout = () => {
      //call API to logout, if logout successful, then set isLoggedIn to false
      console.log("Logout successfully");
      this.setState({isLoggedIn: false});
  }

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <Header show_modal={this.show_modal} isLoggedIn={this.state.isLoggedIn} logout={this.logout} />
        <Modal hidden={this.state.hidden} command={this.state.command} close_modal={this.close_modal} performLogin={this.performLogin} />
        <Hero />
      </div>
    );
  }
}

export default App;
