import React, { Component } from "react";
import { connect } from 'react-redux';
import GoalListItem from './GoalListItem';
import CompleteGoalListItem from './CompleteGoalListItem';
import { setGoals, setCompleteGoals, setUserGoals } from  '../actions';
import { goalRef, completedGoalRef } from '../firebase';




class GoalList extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount () {
        // triggered when ever a value is added. a snap (snapshot?)
        // is returned
        goalRef.on("value", snap => {
            let goals = []
            let userGoals = []
            snap.forEach(goal => {
                const { email, title, assignedTo } = goal.val()
                const gid = goal.key
                goals.push({ email, title, assignedTo, gid})
                if (assignedTo === this.props.user.userid) {
                    userGoals.push({ email, title, assignedTo, gid })
                }
            })
            this.props.setGoals(goals)
            this.props.setUserGoals(userGoals)
        })

        completedGoalRef.on("value", snap => {
            let goals = []
            snap.forEach(goal => {
                const { email, title } = goal.val()
                const gid = goal.key
                goals.push({ email, title, gid})
            })
            this.props.setCompleteGoals(goals)
        })
    }

    render () {
        console.log("goallist props", this.props)
        return (
            <div>
                <h4>Assigned To You:</h4>
                <div>{
                    this.props.userGoals.map((goal, index) => {
                        return (
                            <GoalListItem
                                key={index}
                                title={goal.title}
                                email={goal.email}
                                gid={goal.gid}
                                completable={true}/>
                        )
                    })
                }</div>
                <h4>All Tasks</h4>
                <div>{
                    this.props.goals.map((goal, index) => {
                        return (
                            <GoalListItem
                                key={index}
                                title={goal.title}
                                email={goal.email}
                                gid={goal.gid}
                                completable={false}/>
                        )
                    })
                    }</div>
                <h4>Completed Tasks</h4>
                <div>{
                    this.props.completeGoals.map((goal, index) => {
                        return (
                            <CompleteGoalListItem key={index} title={goal.title} email={goal.email} gid={goal.gid}/>
                        )
                    })
                    }</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log("goal list state", state)
    const { user, goals, completeGoals, userGoals } = state
    return { user, goals, completeGoals, userGoals }
}

const mapActionCreators = {
    setGoals,
    setCompleteGoals,
    setUserGoals
}

export default connect(mapStateToProps, mapActionCreators)(GoalList);
