import React, { Component } from 'react'
import './App.css'

class Stopwatch extends Component {
    constructor(props){
        super(props);
        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 0,
            milliseconds: 0
        }
    }

    componentWillMount(){
        this.tick()
    }

    componentDidMount() {
        setInterval(() => this.tick(), 100);
    }

    tick() {
        if (this.props.mode == 'active') {
            let milliseconds = this.state.milliseconds + 1
            let seconds = this.state.seconds
            let minutes = this.state.minutes
            let hours = this.state.hours

            if (milliseconds == 10) {
                milliseconds = 0
                seconds++
                if (seconds == 60) {
                    seconds = 0
                    minutes++
                    if (minutes == 60) {
                        minutes = 0
                        hours++
                    }
                }
            }

            this.setState({
                milliseconds,
                seconds,
                minutes,
                hours
            })
        }
        else if (this.props.mode == 'reset') {
            this.setState({
                hours: 0,
                minutes: 0,
                seconds: 0,
                milliseconds: 0
            })
        }
    }

    zeroPad(num, padding) {
        return ("0000" + num).slice(-padding)
    }

    render() {
        return (
            <div className='Stopwatch-display'>
                <div className='Stopwatch-h'>{this.zeroPad(this.state.hours, 2)}</div>:
                <div className='Stopwatch-m'>{this.zeroPad(this.state.minutes, 2)}</div>:
                <div className='Stopwatch-s'>{this.zeroPad(this.state.seconds, 2)}</div>.
                <div className='Stopwatch-ms'>{this.zeroPad(this.state.milliseconds, 1)}</div>
            </div>
        )
    }

}

export default Stopwatch;
