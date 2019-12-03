import React from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Dashboard extends React.Component{
    render() {
        const { projects, auth } = this.props;
        if(auth.uid){
            return (
                <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications/>
                    </div>
                </div>
            </div>
            )
        }else {
            return (
                    <div className="red-text center">
                        <h4> Pls SignUp or Login to see awesome artciles or create your cool articles </h4>
                    </div>
                )
        } 
    }
}

const mapStateToProps = (state) =>{
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(Dashboard);