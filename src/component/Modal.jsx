import React, {Component} from 'react';
import AuthHelperService from '../service/AuthHelperService';

import '../css/Modal.css';
import '../css/PrevNext.css';

class Modal extends Component {
    Auth = new AuthHelperService();

    state = {
        name: '',
        email: '',
        password: '',
        errorMessage: ''
    }

    updateField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleRegister = (e) => {
        e.preventDefault();

        this.Auth.signUpOrLogin('signup', this.state.name, this.state.email, this.state.password)
            .then((response) => {
                console.log('final response', response);
                this.props.loginSuccessful();
            })
            .catch((error) => {
                console.log('final error', error.response);
                this.setState({errorMessage: error.response.data.message});
            })
    }

    handleLogin = (e) => {
        e.preventDefault();

        this.Auth.signUpOrLogin('login', undefined, this.state.email, this.state.password)
            .then((response) => {
                console.log('final response', response);
                this.props.loginSuccessful();
            })
            .catch((error) => {
                console.log('final error', error.response);
                this.setState({errorMessage: error.response.data.message});
            });
    }

    buildContent = (command) => {
        if(command === 'Register')
            return (
                <div className="access">
                    <form  onSubmit={(e) => this.handleRegister(e)}>
                        <input type="text" name="name" placeholder="Enter Name" value={this.state.name} onChange={this.updateField} />
                        <input type="text" name="email" placeholder="Enter E-mail" value={this.state.email} onChange={this.updateField} />
                        <input type="password" name="password" placeholder="Enter Password" value={this.state.password} onChange={this.updateField} />
                        <div className="error">{this.state.errorMessage}</div>
                        <button className="submit" type="submit">Register</button>
                    </form>
                </div>
            )
        else
            return (
                <div className="access" >
                    <form onSubmit={(e) => this.handleLogin(e)}>
                        <input type="text" name="email" placeholder="Enter E-mail" value={this.state.email} onChange={this.updateField} />
                        <input type="password" name="password" placeholder="Enter Password" value={this.state.password} onChange={this.updateField} />
                        <div className="error">{this.state.errorMessage}</div>
                        <button className="submit" type="submit">Login</button>
                    </form>
                </div>
            )
    };

    render() {
        return (
            <div className={"modal "+ (this.props.hideModal ? 'hidden' : '')}>
                <div className="modal-content">
                    <label className="close" onClick={this.props.closeModal}>x</label>
                     {this.buildContent(this.props.command)}
                </div>          
            </div>
        );
  }
}

export default Modal;
