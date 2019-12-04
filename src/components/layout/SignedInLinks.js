import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = (props) => {

    const handleClick = (e) => {
        props.signOut()
    }
    const { initials } = props;
    return (
        <ul className="right">
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><a onClick={handleClick}>Log Out</a></li>
            <li><NavLink to='/' className="btn btn-floating pink lighten-1">{initials}</NavLink></li>
        </ul>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        initials: state.firebase.profile.initials
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);