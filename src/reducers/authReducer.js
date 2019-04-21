import {  SIGN_OUT, SIGN_IN } from '../actions/types';
// import {SIGN_IN} from '../actions';
// all capitalized to indicate it is a true constant oject that should never change any of the values inside it
const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
};

export default (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {...state, isSignedIn: true, userId: action.userId };
        case SIGN_OUT:
            return {...state, isSignedIn: false, userId: null };
        default:
            return state;
    }
};