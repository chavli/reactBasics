import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { Link } from 'react-router'

class ResetPasssword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            error: {message: ""},
            success: ""
        }
    }

    onClickPasswordReset() {
        var self = this
        firebaseApp.auth().sendPasswordResetEmail(this.state.email)
            .then(function(value) {
                self.setState({success: "email sent to " + self.state.email})
            })
            .catch(error => {
                console.log("error", error)
                this.setState({ error })
            })
    }

    render() {
        return (
            <div className="form-inline" style={{margin: "5%"}}>
                <h2>Password Reset</h2>
                <div className="form-group">
                    <input
                        className="form-control"
                        style={{margin: "5px"}}
                        type="text"
                        placeholder="email"
                        onChange={event => this.setState({email: event.target.value})} />
                    <br/>
                    <button
                        className="btn btn-warning"
                        style={{margin: "5px"}}
                        onClick={() => this.onClickPasswordReset()}> Send Email
                    </button>
                    <span
                        style={{margin: '5px'}}>
                        <Link to={"/signin"} >Back to Login</Link>
                    </span>
                </div>
                <div>
                    <span style={{color: "red"}}>{ this.state.error.message }</span>
                    <span style={{color: "green"}}>{ this.state.success }</span>
                </div>
            </div>
        )
    }
}

export default ResetPasssword;
