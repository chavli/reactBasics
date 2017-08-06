import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUserList } from '../actions'
import { onlineUsersRef } from '../firebase'


class UserList extends Component {
    constructor(props) {
        super(props)
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

    render() {
        return (
            <div>
                <h4>Online Users</h4>
                <ul>{
                    this.props.userList.map((user, index) => {
                        return (
                            <li key={index}>{ user.email }</li>
                        )
                    })
                }</ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { userList } = state
    return { userList }
}

const mapActionCreators = {
    setUserList
}

export default connect(mapStateToProps, mapActionCreators)(UserList);
