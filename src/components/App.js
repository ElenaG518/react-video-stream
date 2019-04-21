import React from 'react';
// BrowserRouter  and Link is a react component
import {Router, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import createBrowserHistory from '../history'

const App = () => {
    return (
        <div className="ui container">
            
            <Router history = {createBrowserHistory}>
                <div>
                    <Header />
                    <Route path="/" exact component={StreamList} /> 
                    <Route path="/streams/new" exact component={StreamCreate} />
                    <Route path="/streams/edit" exact component={StreamEdit} />
                    <Route path="/streams/delete" exact component={StreamDelete} />
                    <Route path="/streams/show" exact component={StreamShow} />
                </div>
            </Router>
        </div>
    );
}

export default App;