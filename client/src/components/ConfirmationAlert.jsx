import React from 'react';

const ConfirmationAlert = (props) => {
    return (
        <div>
            <button onClick={() => props.deletePost(props.id)}>Confirm </button>
            <button onClick={() => props.toggleShowConfirmationAlert()}>Cancel</button>
        </div>
    );
};

export default ConfirmationAlert;