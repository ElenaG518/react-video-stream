import React from 'react';

class GoogleAuth extends React.Component {
    state = { isSignedIn: null};

    componentDidMount() {
        // When we called Load up here load only allows us to get a signal or a notification of when the loading
        // process is complete by passing in a callback function.
        // arguments to load, if libraries, then syntax is colon (:) separated list of gapi libraries
        window.gapi.load('client:auth2', () => {
            // init calls a promise that will notify us once this client library has been succesfully initialized
            window.gapi.client.init({
                clientId: '864128091912-b7q3221tbrur7m0pfehrtjjophupqmls.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                //we reference the auth instance object
                 this.auth = window.gapi.auth2.getAuthInstance();
                 this.setState({isSignedIn: this.auth.isSignedIn.get()});
                //  listen in a method that we can pass a callback function to, and the callback function will be invoked
                // anytime the user's status isSignedIn changes
                 this.auth.isSignedIn.listen(this.onAuthChange);
             });
        });
    }

    // because this is a callback function I'm going to set it up as an arrow functions that 
    // its context is bound to my component.  One of the ways to bind this to a callback function
    // is to use the arrow function syntax
    onAuthChange = () => {
        this.setState({isSignedIn: this.auth.isSignedIn.get()})
    }

    onSignIn = () => {
        this.auth.signIn();
    };

    // onSignOut = () => {
    //     this.auth.signOut();
    // };

    renderAuthButton() {
        if(this.state.isSignedIn === null ) {
            return <div>I don't know if we are signed in</div>;
        } else if (this.state.isSignedIn) {
            return (
                <button 
                    className="ui red google button"
                    // calling signOut directly from the button
                    // why not use the syntax below:
                        // onClick = {() => this.callback(arg)} OR
                        // onClick = {() => this.callback()} 
                    // not necessary to include parenthesis if we are not sending args to the
                    // function.  only necessary when binding this in a callback function and
                    // sending an argument 
                    // With JSX you pass a function as the event handler
                    onClick = { this.auth.signOut}
                >
                <i className="google icon" />Sign Out</button>
                )
        } else {
            return (
                <button
                    className="ui red google button"
                    // calling signIn by passing a callback function, onSignIn, to the button, which
                    // in turn will call SignIn.  Notice no parentheses inside the curly braces. if 
                    // parentheses were added, onSignIn callback function would be ivoked as soon as the 
                    // component renders
                    onClick = {this.onSignIn}
                >
                <i className="google icon" />Sign in with Google</button>
                )
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>
    };
}

export default GoogleAuth;
