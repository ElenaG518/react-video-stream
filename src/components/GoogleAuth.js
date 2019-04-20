import React from 'react';

class GoogleAuth extends React.Component {
    state = { isSignedIn: null};

    componentDidMount() {
        // When we called Load up here load only allows us to get a signal or a notification of when the loading
        // process is complete by passing in a callback function.
        window.gapi.load('client:auth2', () => {
            // init calls a promise that will notify us once this client library has been succesfully initialized
            window.gapi.client.init({
                clientId: '864128091912-b7q3221tbrur7m0pfehrtjjophupqmls.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                 this.auth = window.gapi.auth2.getAuthInstance();
                 this.setState({isSignedIn: this.auth.isSignedIn.get()})
             });
        });
    }

    renderAuthButton() {
        if(this.state.isSignedIn === null ) {
            return <div>I don't know if we are signed in</div>;
        } else if (this.state.isSignedIn) {
            return <div>I am signed in</div>
        } else {
            return <div>I am not signed in</div>
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>
    };
}

export default GoogleAuth;
