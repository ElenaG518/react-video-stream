import streams from '../apis/streams';
import {  SIGN_OUT, SIGN_IN, CREATE_STREAM } from './types';


// action creators return objects with a property of type.  Remember that dispatch
// is looking to get back an object with a property of type, not a function


// export const SIGN_IN = 'SIGN_IN';
export const signIn = userId => {
    return {
        type: SIGN_IN,
        userId
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

export const createStream = formValues => async dispatch => {
    const response = await streams.post('/streams', formValues);
    dispatch({ type: CREATE_STREAM, payload: response.data });
};
