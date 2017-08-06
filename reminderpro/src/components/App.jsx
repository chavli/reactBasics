import React, { Component } from 'react';
import moment from 'moment'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addReminder, deleteReminder, clearReminders } from '../actions';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            dueDate: '',
            ticks: 0
        }
    }

    componentDidMount() {
        setInterval(() => this.tick(), 60000)
    }

    tick() {
        // re-render the reminders and check for those that are overdue
        this.setState({
            ticks: this.state.ticks + 1
        })
    }

    addReminder() {
        this.props.addReminder(this.state.text, this.state.dueDate)
    }

    deleteReminder(id) {
        this.props.deleteReminder(id)
    }

    clearReminders() {
        this.props.clearReminders()
    }

    renderReminders() {
        const reminders = this.props.reminders
        return (
            <ul className='list-group col-sm-4'>
                {
                    // map each element of reminders to their own HTML
                    reminders.map(reminder => {
                        let classname = "list-group-item"
                        if (moment(new Date(reminder.dueDate)).isBefore(moment(new Date()))) {
                            classname = "list-group-item overdue"
                        }
                        return (
                            <li key={reminder.id} className={classname}>
                                <div className="list-item">
                                    <div>{reminder.text}</div>
                                    <div><em>{moment(new Date(reminder.dueDate)).fromNow() }</em></div>
                                </div>
                                <div
                                    className="list-item delete-button"
                                    onClick={ () => this.deleteReminder(reminder.id)}
                                >
                                    &#x2715;
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    renderDeleteAll() {
        if(this.props.reminders.length > 0){
            return (
                <button
                    type='button'
                    className='btn btn-danger'
                    onClick={() => this.clearReminders()}>
                    Delete All Reminders
                </button>
            )
        }
    }

    render() {
        return (
            <div className='App'>
                <div className='title'>
                    Reminder Pro
                </div>
            <div className='form-inline reminder-form'>
                <div className='form-group'>
                    <input
                        className='form-control'
                        placeholder='I have to...'
                        onChange={event => this.setState({text: event.target.value})}
                    />
                    <input
                        className='form-control'
                        type='datetime-local'
                        onChange={event => this.setState({dueDate: event.target.value})}
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
            { this.renderDeleteAll() }
        </div>
        )
    }
}

// this is a special "connect" function that binds actionCreators to Components
// this allows components to create actions that will change the global state
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addReminder, deleteReminder, clearReminders }, dispatch)
}

// this is the second special function used by connect that allows this
// component access to the current redux state. we can then map it to props
// and use it to update the component
function mapStateToProps(state) {
    // we can return all, or portions, of the global state to be used
    // as properties of the component
    // NOTE: in this app, the global state is just a list of reminders
    return {
        reminders: state,
    }
}

// tie everything together by using the connect function.
// these functions will be properties of this component, which can then be called to modify
// overall state
export default connect(mapStateToProps, mapDispatchToProps)(App);
