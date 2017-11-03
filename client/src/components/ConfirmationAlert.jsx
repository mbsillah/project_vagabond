import React from 'react';

const ConfirmationAlert = (props) => {
    return (
        <div>
            <h4>Are you sure you want to delete this post? </h4>
            <button onClick={() => props.deletePost(props.id)}>Confirm </button>
            <button onClick={() => props.toggleShowConfirmationAlert()}>Cancel</button>
        </div>
    );
};

export default ConfirmationAlert;