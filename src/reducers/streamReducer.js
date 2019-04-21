import _ from 'lodash';


import {
    FETCH_STREAMS,
    FETCH_STREAM, 
    DELETE_STREAM,
    EDIT_STREAM, 
    CREATE_STREAM
} from '../actions/types';

export default (state={}, action) => {
    switch (action.type) {
        case FETCH_STREAMS:
        // Now map keys returns a big object and we want to take all the key value pairs from 
        // that object and add them into the new object that gets created.  So that's why I 
        // put the dot dot dot for mapKeys.
            return {...state, ..._.mapKeys(action.payload, 'id') };
        case FETCH_STREAM:
            return {...state, [action.payload.id]: action.payload};
        case CREATE_STREAM:
            return {...state, [action.payload.id]: action.payload};
        case EDIT_STREAM:
            return {...state, [action.payload.id]: action.payload};
        case DELETE_STREAM:
            return _.omit(state, action.payload);
        default:
            return state;
    }
};