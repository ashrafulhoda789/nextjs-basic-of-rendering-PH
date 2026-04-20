import Posts from "@/components/Posts";
import { Suspense } from "react";


const PostsPage = () => {

    const postPromise = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());


    return (
        <div>
            <Suspense fallback={<h2 className="text-3xl">Loading posts...</h2>}>
                <Posts postPromise={postPromise}></Posts>
            </Suspense>
        </div>
    );
};

export default PostsPage;