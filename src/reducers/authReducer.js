// all capitalized to indicate it is a true constant oject that should never change any of the values inside it

const INITIAL_STATE = {
    isSignedIn: null
};

export default (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return {...state, isSignedIn: true };
        case 'SIGN_OUT':
            return {...state, isSignedIn: false };
        default:
            return state;
    }
};