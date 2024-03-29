function Post({post}){
    return(
        <>
            <h2>{post.id} {post.title}</h2>
            <p>{post.body}</p>
        </>
    )
}

export default Post;

export async function getStaticPaths(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json();

    const paths = data.map((post)=>{
        return{
            params:
                {
                    postId: `${post.id}`
                }
        }
    })

    return{
        // paths:[
        //     {
        //         params: {postId: "1"},
        //     },
        //     {
        //         params: {postId: "2"},
        //     },
        //     {
        //         params: {postId: "3"},
        //     },
        // ],
        paths,
        fallback: false,
    }
}

export async function getStaticProps(hello){
    const {params} = hello;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await res.json();

    return{
        props:{
            post:data,
        },
    }
}