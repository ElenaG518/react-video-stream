import React from 'react';
// Field is a react component so Capitalized, reduxForm is a function, so camelCase
// reduxForm has similar functionality as the connect function in that it makes sure we can call
// an action creator, and get some form data into our component
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';


class StreamCreate extends React.Component {
    
    mySubmitFunction = formValues => {
        console.log(formValues);
        this.props.createStream(formValues);
        
    }

    render() {
        return (
            <div>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit ={this.mySubmitFunction}
                className="ui form error"
                />
            </div>
            
        );
    }    
};

export default connect(null, { createStream })(StreamCreate); 