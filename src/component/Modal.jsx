import React, {Component} from 'react';
import '../css/Modal.css';

class Modal extends Component {

    buildContent = (command) => {
        if(command == 'Register')
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
                    <form>
                        <input type="text" name="email" placeholder="Enter E-mail" />
                        <input type="password" name="password" placeholder="Enter Password" />
                        <button type="submit">Login</button>
                    </form>
                </div>
            )
    };

    render() {
        return (
            <div className={"modal "+ (this.props.hidden ? 'hidden' : '')}>
                <div className="modal-content">
                    <label className="close" onClick={this.props.close_modal}>&#x2715;</label>
                    <h2>{this.props.command}</h2><hr />
                     {this.buildContent(this.props.command)}
                    {/*<label className="modal-content-btn" onClick={this.props.close_modal}>OK</label>*/}   
                </div>          
            </div>
            /*<div><div id="open-modal" className={'modal-window ' + (this.props.hidden ? 'hidden' : '')}>
                <div>
                    <a href="#" title="Close" className="modal-close">Close</a>
                    <h1>Voilà!</h1>
                    <div>A CSS-only modal based on the :target pseudo-class. Hope you find it helpful.</div>
                    <div><small>Sponsor</small></div>
                    <a href="https://aminoeditor.com" target="_blank">👉 Amino: Live CSS Editor for Chrome</a>
                </div>
        </div>*/
        );
  }
}

export default Modal;
