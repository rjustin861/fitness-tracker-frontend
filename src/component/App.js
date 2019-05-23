import React, {Component} from 'react';
import '../css/App.css';

import Header from './Header';
import RegisterModal from './RegisterModal';
import LoginModal from './LoginModal';
import Hero from './Hero';

class App extends Component {

  state = {
    command: ''
  }

  showModal = (command) => {
    this.setState({command});
  }

  hideModal = () => {
    this.setState({command: ''});
  }

  loginSuccessful = () => {
    this.props.history.replace('/dashboard');
  }

  render() {
    return (
      <div className="wrapper">
        <Header isLoggedIn={false} showModal={this.showModal} />
        {this.state.command === 'Register' && <RegisterModal hideModal={this.hideModal} loginSuccessful={this.loginSuccessful} />}
        {this.state.command === 'Login' && <LoginModal hideModal={this.hideModal} loginSuccessful={this.loginSuccessful} />}
        <Hero />
      </div>
    );
  }
}

export default App;
