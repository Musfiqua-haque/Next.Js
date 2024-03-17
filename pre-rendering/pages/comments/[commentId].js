function comment({comment}){
    return(
    <>
        <h2>{comment.id} {comment.name}</h2>
        <p>{comment.body}</p>
    </>
    )
}

export default comment;

export async function getStaticPaths(){

    const res  = await fetch("https://jsonplaceholder.typicode.com/comments")
    const data = await res.json()

    const paths = data.map((comment)=>{
        return{
            params:{
                commentId: `${comment.id}`
            }
        }
    })

    return{
        paths,
        fallback: false,
    }
}

export async function getStaticProps(context){
    const {params} = context;

    const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${params.commentId}`)
    const data = await res.json();

    return{
        props:{
            comment: data,
        },
    }
}
