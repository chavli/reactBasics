import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addReminder } from '../actions';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    addReminder() {
        this.props.addReminder(this.state.text)
    }

    renderReminders() {
        const reminders = this.props.reminders
        return (
            <ul className='list-group col-sm-4'>
                {
                    // map each element of reminders to their own HTML
                    reminders.map(reminder => {
                        return (
                            <li key={reminder.id} className='list-group-item'>
                                <div>{reminder.text}</div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    render() {
        return (
            <div className='App'>
                <div className='title'>
                    Reminder Pro
                </div>
            <div className='form-inline'>
                <div className='form-group'>
                    <input
                        className='form-control'
                        placeholder='I have to...'
                        onChange={event => this.setState({text: event.target.value})}
                    />
                </div>
                <button
                    type='button'
                    className='btn btn-success'
                    onClick={() => this.addReminder()}>
                    Add Reminder
                </button>
            </div>
            { this.renderReminders() }
        </div>
        )
    }
}

// this is a special "connect" function that binds actionCreators to Components
// this allows components to create actions that will change the global state
function mapDispatchToProps(dispatch) {
    return bindActionCreators({addReminder}, dispatch)
}

// this is the second special function used by connect that allows this
// component access to the current redux state. we can then map it to props
// and use it to update the component
function mapStateToProps(state) {
    // we can return all, or portions, of the global state to be used
    // as properties of the component
    return {
        reminders: state,
        name: 'Cha'
    }
}

// tie everything together by using the connect function.
// these functions will be properties of this component, which can then be called to modify
// overall state
export default connect(mapStateToProps, mapDispatchToProps)(App);
