import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from '../store';

function ToDo({ text, BtnClick, id }) {
    return (
        <li>
            <Link to={`/${id}`}>{text}</Link>
            <button onClick={BtnClick}>Delete</button>
        </li>
    );
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        BtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
    };
}

export default connect(null, mapDispatchToProps)(ToDo);
