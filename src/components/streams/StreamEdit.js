import React from 'react';
// connect is from react-redux
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

// props are being sent by 'react-router-dom' in App file
class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    };

    render() {
        console.log(this.props);
        if (!this.props.stream) {
            return <div>Loading...</div>
        }
        return (
            <div className="item">
                {this.props.stream.title}
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

export default connect(mapStateToProps, {fetchStream})(StreamEdit);