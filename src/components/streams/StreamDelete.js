import React from 'react';
import Modal from '../Modal';

const StreamDelete = () => {
    const actions = (
        <div>
            <button className="ui button negative">Submit</button>
            <button className="ui button">Cancel</button>
        </div>
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