import React, { Component } from 'react'
import Clock from './Clock'
import Stopwatch from './Stopwatch'
import './App.css'
import {Form, FormControl, Button} from 'react-bootstrap'

/*
- JSX is a combination of JS and XML
*/

class App extends Component {

    // each component keeps track of its own state, along with the overall state of the app.
    // state is tracked using 'this.state' dictionary
    constructor(props) {
        super(props);

        // this syntax can only be used by the constructor to set initial state.
        this.state = {
            deadline: 'December 2, 2017',
            newDeadline: '',
            reset: false
        }
    }

    changeDeadline() {
        // IMPORTANT: never mutate state directly
        // this.state.deadline =
        // instead you use setState()
        // this.setState({deadline: 'November 30, 2018'})
        this.setState({deadline: this.state.newDeadline})
    }

    startStopwatch() {
        this.setState({stopwatchmode: 'active'})
    }

    stopStopwatch() {
        this.setState({stopwatchmode: 'paused'})
    }

    resetStopwatch() {
        this.setState({stopwatchmode: 'reset'})
    }

    render() {
        return (
            // the word 'class' is a reserved keyword in JSX so we cant use it. instead to specify
            // a HTML element's class we use the keyword 'classname'
            // NOTE: {} notation is used when we want to include javascript code in our JSX
            <div className='App'>
                <div>
                    <div className='App-title'>{this.state.deadline}</div>
                    <Clock deadline={this.state.deadline}/>
                </div>
                <Form inline>
                    <FormControl
                        className='Deadline-input'
                        placeholder='new date'
                        onChange={event => this.setState({newDeadline: event.target.value}) }/>
                    <Button onClick={() => this.changeDeadline()}>Submit</Button>
                </Form>
                <hr/>
                <div className='App-title'>Stopwatch</div>
                <Form inline>
                    <Button onClick={() => this.startStopwatch()}>Start</Button>
                    <Button onClick={() => this.stopStopwatch()}>Pause</Button>
                    <Button onClick={() => this.resetStopwatch()}>Reset</Button>
                </Form>
                <div>
                    <Stopwatch mode={this.state.stopwatchmode}/>
                </div>
            </div>
        )
    }
}
// NOTE: () => x() is an ES6 anonymous function that calls a method. this tactic avoids
// infinite call loops in the code.
export default App;
