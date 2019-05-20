import React, {Component} from 'react';
import AuthHelperService from '../service/AuthHelperService';

import '../css/Modal.css';
import '../css/PrevNext.css';

class LoginModal extends Component {
    Auth = new AuthHelperService();

    state = {
        email: '',
        password: '',
        errorMessage: ''
    }

    updateField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
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

    render() {
        return (
            <div className="modal">
                <div className="modal-content">
                    <label className="close" onClick={this.props.hideModal}>x</label>
                    <div className="access" >
                        <form onSubmit={(e) => this.handleLogin(e)}>
                            <input type="text" name="email" placeholder="Enter E-mail" value={this.state.email} onChange={this.updateField} />
                            <input type="password" name="password" placeholder="Enter Password" value={this.state.password} onChange={this.updateField} />
                            { this.state.errorMessage && 
                                <div className='error'>
                                    <strong>ERROR</strong> - {this.state.errorMessage}
                                </div>
                            }
                            <button className="submit" type="submit">Login</button>
                        </form>
                    </div>
                </div>          
            </div>
        );
  }
}

export default LoginModal;
