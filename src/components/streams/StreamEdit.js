import _ from 'lodash';
import React from 'react';
// connect is from react-redux
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

// props are being sent by 'react-router-dom' in App file
class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    };

    mySubmitFunction = formValues => {
        console.log(formValues);
        this.props.editStream(this.props.match.params.id, formValues);
    }

    render() {
        console.log(this.props);
        if (!this.props.stream) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <h3>Edit Stream</h3>
                <StreamForm 
                    onSubmit = {this.mySubmitFunction}
                    initialValues={_.pick(this.props.stream, "title", "description")}
                />
            </div>
            
        );
    }

}

// So again any time that maps state to prop's is called we actually get two arguments.
// The first is all the state out of our redux store.
// The second is the prop's object that shows up inside of our components.
// So now inside of map state to prop's we have all the information we need.
const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);