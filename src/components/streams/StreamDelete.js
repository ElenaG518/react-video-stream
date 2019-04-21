import React from 'react';
import Modal from '../Modal';

const StreamDelete = () => {
    const actions = (
        <React.Fragment>
            <button className="ui button negative">Submit</button>
            <button className="ui button">Cancel</button>
        </React.Fragment>
    );

    return (
        <div>
            StreamDelete
            <Modal 
                title= "Delete Modal" 
                content="Are you Sure you want to delete this stream?"
                actions={actions}
            />
        </div>
    );
};

export default StreamDelete;