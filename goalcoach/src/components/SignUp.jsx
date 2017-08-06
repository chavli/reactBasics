import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "email": "",
            "password": "",
            "repeatedpw": "",
            "error": {
                "message": ""
            }
        }
    }

    signUp() {
        // shorthand for setting each const to the value of the same key in state
        const { email, password, repeatedpw } = this.state

        if (repeatedpw !== password) {
            var err = this.state.error
            err.message = "passwords don't match"
            this.setState({error: err})
        }
        else {
            firebaseApp.auth().createUserWithEmailAndPassword(email, password)
                .catch(error => {
                    this.setState({error: error})
                })
        }
    }

    render() {
        return (
            <div className="form-inline" style={{margin: '5%'}}>
                <h2>Sign Up</h2>
                <div className="form-group">
                    <input
                        className="form-control"
                        style={{margin: '5px'}}
                        type="text"
                        placeholder="email"
                        onChange={event => this.setState({"email": event.target.value})}/>
                    <br/>
                    <input
                        className="form-control"
                        style={{margin: '5px'}}
                        type="password"
                        placeholder="password"
                        onChange={event => this.setState({"password": event.target.value})}/>
                    <br/>
                    <input
                        className="form-control"
                        style={{margin: '5px'}}
                        type="password"
                        placeholder="retype password"
                        onChange={event => this.setState({"repeatedpw": event.target.value})}/>
                    <br/>
                    <button
                        className="btn btn-success"
                        style={{margin: '5px'}}
                        type="button"
                        onClick={() => this.signUp()}>
                        Sign Up
                    </button>
                    <span
                        style={{margin: '5px'}}>
                        <Link to={"/signin"} >Existing User? Sign In.</Link>
                    </span>
                    <div>{this.state.error.message}</div>
                </div>
            </div>
        )
    }
}

export default SignUp;
