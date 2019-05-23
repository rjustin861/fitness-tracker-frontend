import React, {Component} from 'react';
import AuthHelperService from '../service/AuthHelperService';

import '../css/Modal.css';
import '../css/PrevNext.css';

class RegisterModal extends Component {
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

    validateField = () => {
        const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let errorMessage = '';

        if(!this.state.name)
            errorMessage = 'Name is required';
        else if(!re.test(this.state.email))
            errorMessage = 'Please enter a valid e-mail address';
        else if(!this.state.password)
            errorMessage = 'Password is required';

        return errorMessage;
    }

    handleRegister = (e) => {
        e.preventDefault();

        const errorMessage = this.validateField();

        if(!!errorMessage) {
            this.setState({errorMessage});
        }
        else {
            const email = this.state.email.toLowerCase();

            this.Auth.signUpOrLogin('signup', this.state.name, email, this.state.password)
                .then((response) => {
                    this.props.loginSuccessful();
                })
                .catch((error) => {
                    console.log('final error', error.response);
                    this.setState({errorMessage: error.response.data.message});
                })
        }
    }

    render() {
        return (
            <div className="modal">
                <div className="modal-content">
                    <label className="close" onClick={this.props.hideModal}>x</label>
                    <div className="access">
                        <form  onSubmit={(e) => this.handleRegister(e)}>
                            <input type="text" name="name" placeholder="Enter Name" value={this.state.name} onChange={this.updateField} />
                            <input type="text" name="email" placeholder="Enter E-mail" value={this.state.email} onChange={this.updateField} />
                            <input type="password" name="password" placeholder="Enter Password" value={this.state.password} onChange={this.updateField} />
                            { this.state.errorMessage && 
                                <div className='error'>
                                    <strong>ERROR</strong> - {this.state.errorMessage}
                                </div>
                            }
                            <button className="submit" type="submit">Register</button>
                        </form>
                    </div>
                </div>          
            </div>
        );
  }
}

export default RegisterModal;
