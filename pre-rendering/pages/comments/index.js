import Link from "next/link";

function Comments({comments}){
    return(
        <>
            <h1>Comments for Users</h1>
            {comments.map((comment)=>{
                return(
                    <div key={comment.id}>
                    <Link href={`/comments/${comment.id}`} passHref>
                      <h3>{comment.id} {comment.name}</h3>
                    </Link>
                    </div>
                )
            })}
        </>
    )
}

export default Comments;

export async function getStaticProps(){
    const res  = await fetch("https://jsonplaceholder.typicode.com/comments")
    const data = await res.json()

    return{
        props:{
            comments:data,
        },
    }
}