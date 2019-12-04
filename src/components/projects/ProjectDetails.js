import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from 'react-router-dom';

const ProjectDetails = props => {
  const { project, auth } = props;
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let createdTime = project.createdAt.toDate();
  let createdDate = createdTime.getDate();
  let createdHour = createdTime.getHours();
  let createdMonth = monthNames[createdTime.getMonth()];
  if(!auth.uid){
    return (
      <Redirect to='/' />
    )
  }
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-3 grey-text">
            <div>
              Posted by the {project.authorFirstName} {project.authorLastName}
            </div>
            <div>{createdDate} {createdMonth}, {createdHour + ":00"}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="conatiner center">
        <p> Loading Project...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
