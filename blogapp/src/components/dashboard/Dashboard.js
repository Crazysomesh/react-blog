import React, { Component } from 'react';
import BlogList from '../blogs/BlogList';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
    render(){
        //console.log(this.props)
        const { blogs, auth } = this.props;
        if( !auth.uid ) return  <Redirect to='/signin' />
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <BlogList blogs={blogs} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProp = (state) => {
    console.log(state);
    return {
        blogs: state.firestore.ordered.blogs,
        auth: state.firebase.auth
    }
}

export default compose(
        connect(mapStateToProp),
        firestoreConnect([
            { collection: 'blogs' }
        ])
    )(Dashboard)