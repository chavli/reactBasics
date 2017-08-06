import React, { Component } from "react";
import { completedGoalRef } from '../firebase';

class CompleteGoalListItem extends Component {
    constructor(props){
        super(props);
    }

    onClickRemoveGoal() {
        completedGoalRef.child(this.props.gid).remove()
    }

    render () {
        return (
            <div style={{margin: "5px"}}>
                <strong>{ this.props.title }</strong>
                <span><em> -- completed by: { this.props.email }</em></span>
                <button
                    style={{marginLeft: "5px"}}
                    className="btn btn-danger"
                    onClick={() => this.onClickRemoveGoal()}
                >Delete</button>
            </div>
        )
    }
}

export default CompleteGoalListItem;
