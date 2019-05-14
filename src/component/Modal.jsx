import React, {Component} from 'react';
import AuthHelperService from '../service/AuthHelperService';

import '../css/Modal.css';

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
                <div>
                    <form onSubmit={(e) => this.handleRegister(e)}>
                        <input type="text" name="name" placeholder="Enter Name" value={this.state.name} onChange={this.updateField} />
                        <input type="text" name="email" placeholder="Enter E-mail" value={this.state.email} onChange={this.updateField} />
                        <input type="password" name="password" placeholder="Enter Password" value={this.state.password} onChange={this.updateField} />
                        <button type="submit">Register</button>
                        <div>{this.state.errorMessage}</div>
                    </form>
                </div>
            )
        else
            return (
                <div>
                    <form onSubmit={(e) => this.handleLogin(e)}>
                        <input type="text" name="email" placeholder="Enter E-mail" value={this.state.email} onChange={this.updateField} />
                        <input type="password" name="password" placeholder="Enter Password" value={this.state.password} onChange={this.updateField} />
                        <button type="submit">Login</button>
                        <div>{this.state.errorMessage}</div>
                    </form>
                </div>
            )
    };

    render() {
        return (
            <div className={"modal "+ (this.props.hideModal ? 'hidden' : '')}>
                <div className="modal-content">
                    <label className="close" onClick={this.props.closeModal}>&#x2715;</label>
                    <h2>{this.props.command}</h2><hr />
                     {this.buildContent(this.props.command)}
                </div>          
            </div>
        );
  }
}

export default Modal;
