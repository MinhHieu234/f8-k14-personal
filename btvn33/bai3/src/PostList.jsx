import React from 'react';
import PostItem from './PostItem';

function PostList({ posts }) {
    return (
        <div>
            {posts.map((post) => (
                <PostItem key={post.id} title={post.title} content={post.content} />
            ))}
        </div>
    );
}
export default PostList;
