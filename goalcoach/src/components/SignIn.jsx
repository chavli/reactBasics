import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';

class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "email": "",
            "password": "",
            "error": {
                "message": ""
        }
            }
    }

    onClickSignIn() {
        const { email, password } = this.state

        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .catch(error => {
                this.setState({error: error})
            })
    }

    render() {
        return (
            <div className="form-inline" style={{margin: '5%'}}>
                <h2>Login</h2>
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
                    <button
                        className="btn btn-success"
                        style={{margin: '5px'}}
                        type="button"
                        onClick={() => this.onClickSignIn()}>
                        Login
                    </button>
                    <span
                        style={{margin: '5px'}}>
                        <Link to={"/signup"} >Create an account</Link>
                    </span>
                    <span
                        style={{margin: '5px'}}>
                        <Link to={"/resetpassword"} >Forgot Password?</Link>
                    </span>
                    <div>{this.state.error.message}</div>
                </div>
            </div>
        )
    }
}

export default SignIn;
