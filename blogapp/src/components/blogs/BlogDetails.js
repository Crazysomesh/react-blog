import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

function BlogDetails(props) {
  const { blog, auth } = props;
  if( !auth.uid ) return  <Redirect to='/signin' />
  if( blog ) {
    return(
    <div className="container section blog-details">
      <div className="card z-depth -0">
        <div className="card-content">
            <span className="card-title">{ blog.title }</span>
            <p>{ blog.content }</p>
            </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted by {blog.authorFirstName} {blog.authorlastName} </div>
                    <div>3rd January, 2am </div>
                </div>
        </div>
    </div>
    )
  }
  else {
  return (
    <div className="container center"> 
      <p>Loading project....</p>
    </div>
  )
}
}
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const blogs = state.firestore.data.blogs;
  const blog = blogs ? blogs[id] : null
  return {
    blog: blog,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'blogs' }
  ])

)(BlogDetails)
