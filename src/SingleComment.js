import React from 'react';


const SingleComment = (props) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img style={{ height:45,width:40 }} src={ props.avatar } alt="profile picture" />
            </a>
            <div className="content">
                <a href="/" className="author">
                    { props.author }
                </a>
                <div className="metadata">
                    <span className="date">
                        { props.date }
                    </span>
                </div>
                <div className="text">
                    { props.text }
                </div>
            </div>
        </div>
    )
}

export default SingleComment;
