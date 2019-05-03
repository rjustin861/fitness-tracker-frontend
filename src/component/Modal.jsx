import React, {Component} from 'react';
import '../css/Modal.css';

class Modal extends Component {
    state = {
        isLoggedIn: false
    }

    buildContent = (command) => {
        if(command === 'Register')
            return (
                <div>
                    <form>
                        <input type="text" name="name" placeholder="Enter Name" />
                        <input type="text" name="email" placeholder="Enter E-mail" />
                        <input type="password" name="password" placeholder="Enter Password" />
                        <button type="submit">Register</button>
                    </form>
                </div>
            )
        else
            return (
                <div>
                    <form onSubmit={(e) => this.props.performLogin(e)}>
                        <input type="text" name="email" placeholder="Enter E-mail" />
                        <input type="password" name="password" placeholder="Enter Password" />
                        <button type="submit">Login</button>
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
