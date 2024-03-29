
function NewsArticleList({articles}){
    return(
        <>
        <h2>List of News Articles</h2>
        {articles.map((article)=>{
            return(
                <div key={article.id}>
                    <h3>{article.id} {article.title} | {article.category}</h3>
                </div>
            )
        })}
        </>
    )
}

export default NewsArticleList

export async function getServerSideProps(){
    const res = await fetch("http://localhost:4000/news")
    const data = await res.json()

    return{
        props:{
            articles:data,
        },
    }
}