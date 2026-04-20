// 'use client'
import { use } from "react";


const Posts = ({postPromise}) => {
    const posts = use(postPromise);
    console.log(posts);
    return (
        <div>
            <h2 className="text-4xl">{posts.length} Posts</h2>
        </div>
    );
};

export default Posts;