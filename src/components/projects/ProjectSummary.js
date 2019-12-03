import React from 'react';

const ProjectSummary = (props) => {
    let project = props.project;
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span classNames="card-title" style={{fontSize: '22px'}}>{project.title}</span>
                <p>{project.content}</p>
                <p className="grey-text">01st December, 2am</p>
            </div>
        </div>
    )
}

export default ProjectSummary;