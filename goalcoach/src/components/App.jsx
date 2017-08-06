import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap'
import { firebaseApp, onlineUsersRef } from '../firebase';
import AddGoal from './AddGoal'
import GoalList from './GoalList'
import UserList from './UserList'

class App extends Component {

    onClickSignOut() {
        firebaseApp.auth().signOut()
            .catch(error => {
                console.log(error)
            })
        console.log("PROPS ", this.props)
        onlineUsersRef.child(this.props.user.userid).remove()
    }

    render() {
        return (
            <div style={{margin: "5px"}}>
                <Grid>
                    <h2>GoalCoach</h2>
                    <hr/>
                    <Row className="show-grid">
                        <Col xs={12} md={8}>
                            <AddGoal />
                            <br />
                            <br />
                            <GoalList />
                        </Col>
                        <Col xs={6} md={4}>
                            <UserList />
                        </Col>
                    </Row>
                    <hr/>
                    <button
                        className="btn btn-danger"
                        onClick={() => this.onClickSignOut()}
                    > Sign Out </button>
                </Grid>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { user } = state
    return { user }
}


export default connect(mapStateToProps, null)(App);
