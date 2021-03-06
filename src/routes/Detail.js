import React from 'react';
import { connect } from 'react-redux';

function Detail({ toDos }) {
    console.log(toDos?.text);
    return (
        <>
            <h1>{toDos?.text}</h1>
            <h5>Create at: {toDos?.id}</h5>
        </>
    );
}

function mapStateToProps(state, ownProps) {
    const {
        match: {
            params: { id },
        },
    } = ownProps;
    console.log(id);
    return { toDos: state.find((toDo) => toDo.id === parseInt(id)) };
}

export default connect(mapStateToProps)(Detail);
