// const { getStaticProps } = require("../users")

import Link from "next/link";

function PostList({posts}){
    return(
        <>
        <h1>List of Post</h1>
        {posts.map((post)=>{
            return(
                <div key={post.id}>
                    <Link href={`/posts/${post.id}`} passHref>
                    <h2>{post.id} {post.title}</h2>
                    </Link>
                    <hr></hr>
                </div>
            )
        })}
        </>
    )
}

export default PostList;

export async function getStaticProps(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json();

    return{
        props:{
            posts: data,
        }
    }
}