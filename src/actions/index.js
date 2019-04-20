import {  SIGN_OUT } from './types';


// action creators return objects with a property of type.  Remember that dispatch
// is looking to get back an object with a property of type, not a function


export const SIGN_IN = 'SIGN_IN';
export const signIn = () => {
    return {
        type: SIGN_IN
    };
};

export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};