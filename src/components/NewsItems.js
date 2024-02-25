import React, { Component } from 'react'

export class NewsItems extends Component {


    render() {
        let { name, body, email, id, commentId } = this.props
        return (
            <div>
                <div className="card my-2">
                    <div className="card-header">
                        {id}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <hr className='my-2' />
                        <p className="card-text">{email}</p>
                        <hr className='my-2' />
                        <p className="card-text">{body}</p>
                        {/* <a href={commentId} target='_blank' className="btn btn-primary mt-2">Read More</a> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItems
