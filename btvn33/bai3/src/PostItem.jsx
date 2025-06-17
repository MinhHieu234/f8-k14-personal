import React from 'react';

function PostItem({ title, content }) {
    return (
        <div className="post-item">
            <div className="post-title">{title}</div>
            <div className="post-content">{content}</div>
        </div>
    );
}
export default PostItem;
