import React, { Component } from 'react'
import './App.css'

class Clock extends Component {
    // props are used to receive values from a parent.
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
        console.log(this.props)
    }

    componentWillMount() {
        // this method is a lifecycle method and is called once before anything
        // is rendered
        this.getTimeUntil(this.props.deadline);
    }

    componentDidMount() {
        // this method is a lifecycle method and is called AFTER the component
        // completely renders
        setInterval(() => this.getTimeUntil(this.props.deadline), 1000)
    }

    // NOTE: const is for variables that can be set but never need to be changed
    // let is used for variables that can be changed
    getTimeUntil(deadline) {
        // time diff in ms
        const time = Date.parse(deadline) - Date.parse(new Date());

        // setState implicitly calls render
        this.setState({
            seconds: this.leadingZero(Math.floor((time/1000)%60)),
            minutes: this.leadingZero(Math.floor((time/1000/60)%60)),
            hours: this.leadingZero(Math.floor((time/1000/60/60)%24)),
            days: this.leadingZero(Math.floor((time/1000/60/60/24)))
        })

    }

    leadingZero(num) {
        return num < 10 ? '0' + num : num;
    }

    render() {
        return (
            <div className='Clock-display'>
                <div className='Clock-days'>{this.state.days} days</div>
                <div className='Clock-hours'>{this.state.hours} hours</div>
                <div className='Clock-minutes'>{this.state.minutes} minutes</div>
                <div className='Clock-seconds'>{this.state.seconds} seconds</div>
            </div>
        )
    }

}

export default Clock;
