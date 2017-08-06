import React, { Component } from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap'
import { setUserList } from '../actions'
import { connect } from 'react-redux';
import { goalRef, onlineUsersRef } from '../firebase';


class AddGoal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ""
        }
    }

    componentDidMount() {
        onlineUsersRef.on("value", snap => {
            let users = []
            snap.forEach(user => {
                const { email } = user.val()
                const userid = user.key
                users.push({email, userid})
            })
            this.props.setUserList(users)
        })
    }

    onClickAddGoal() {
        goalRef.push({
            email: this.props.user.email,
            title: this.state.title,
        })
    }

    onClickAssign(eventKey) {
        console.log(eventKey)
        goalRef.push({
            email: this.props.user.email,
            assignedTo: eventKey,
            title: this.state.title,
        })
    }

    render () {
        return (
            <div className="form-inline">
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="add goal"
                        style={{marginRight: "5px"}}
                        onChange={event => this.setState({title: event.target.value})}
                    />
                    <DropdownButton
                        bsStyle="primary"
                        title="Assign To..."
                        id="user list"
                        onSelect={(eventKey, event) => this.onClickAssign(eventKey)}> {
                        this.props.userList.map((user, index) => {
                            return <MenuItem key = { index } eventKey={ user.userid }>{ user.email }</MenuItem>
                        })
                    }</DropdownButton>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { user, userList } = state;
    return { user, userList };
}

const mapActionCreators = {
    setUserList
}

export default connect(mapStateToProps, mapActionCreators)(AddGoal);
