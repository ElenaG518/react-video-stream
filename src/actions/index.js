import streams from '../apis/streams';
import {  
    SIGN_OUT, 
    SIGN_IN, 
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM, 
    DELETE_STREAM,
    EDIT_STREAM
} from './types';


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

export const createStream = formValues => async (dispatch, getState) => {
    const { userId } =getState().auth;
    const response = await streams.post('/streams', {...formValues, userId });
    
    dispatch({ type: CREATE_STREAM, payload: response.data });
};

export const fetchStreams = () => async dispatch => {
    const response = await streams.get('/streams');
    
    dispatch({type: FETCH_STREAMS, payload: response.data});
};

export const fetchStream = id => async dispatch => {
    const response = await streams.get(`/streams/${id}`);
    
    dispatch({type: FETCH_STREAM, payload: response.data});      
}

export const editStream = (id, formValues) => async dispatch => {
    const response = await streams.put(`/streams/${id}`, formValues);
    
    dispatch({type: EDIT_STREAM, payload: response.data});
}

export const deleteStream = id => async dispatch => {
    await streams.delete(`/streams/${id}`);
    
    dispatch({type: DELETE_STREAM, payload: id})
}