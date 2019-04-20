import React from 'react';
// Field is a react component so Capitalized, reduxForm is a function, so camelCase
// reduxForm has similar functionality as the connect function in that it makes sure we can call
// an action creator, and get some form data into our component
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
    renderError({ error, touched }) {
        // touched is false by default, and turns to true if user clicks into this input
        if (touched && error) {
            return (
                <div className= "ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }
    
    // destructuring to get the input property from formProps.input
    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? "error" : ""}`;
        // meta comes form validate function below
        console.log(meta);
        // send all the properties from formProps.input to the <input /> element
        return (
            <div className={className}>
                <label>{label} </label>
                <input {...input } autoComplete="off" />
                {this.renderError(meta)}
                
            </div>
        );
    }

    mySubmitFunction(formValues){
        console.log(formValues);
        
    }

    render() {
        return (
            // The Form component is a simple wrapper for the React <form> component that allows the surrounding 
            // redux-form-decorated component to trigger its onSubmit function.
            <form 
                onSubmit ={this.props.handleSubmit(this.mySubmitFunction)}
                className="ui form error"
            >
                {/* Field component passes "label" property to this.renderInput as part of formProps */}
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }    
};

const validate = formValues => {
    const errors = {};
    
    if (!formValues.title) {
        // only ran if the user did not enter a title
        errors.title = 'You must enter a title';
    }

    if (!formValues.description) {
        errors.description = 'You must enter a description';
    }

    return errors;
}

// as opposed to connect, which accepts multiple arguments, 
// reduxForm receives a single object and we put several configuration into that object
export default reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);