import React from 'react'
import moment from 'moment'

const blogSummary = ({blog}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{blog.title}</span>
        <p>Posted by {blog.authorFirstName} {blog.authorLastName}</p>
        <p className="grey-text">{moment(blog.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  )
}

export default blogSummary