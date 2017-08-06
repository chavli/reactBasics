import React, { Component } from "react";
import { connect } from 'react-redux';
import { goalRef, completedGoalRef } from '../firebase';

class GoalListItem extends Component {
    constructor(props){
        super(props);
    }

    onClickCompleteGoal() {
        goalRef.child(this.props.gid).remove()
        completedGoalRef.push({
            "email": this.props.user.email,
            "title": this.props.title
        })
    }

    render () {
        let button = null
        if (this.props.completable){
            button = (
                <button
                    style={{marginLeft: "5px"}}
                    className="btn btn-success"
                    onClick={() => this.onClickCompleteGoal()}
                >Mark Complete</button>
            )
        }

        return (
            <div style={{margin: "5px"}}>
                <strong>{ this.props.title }</strong>
                <span><em> -- submitted by: { this.props.email }</em></span>
                {button}
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { user } = state
    return { user }
}

export default connect(mapStateToProps, null)(GoalListItem);
