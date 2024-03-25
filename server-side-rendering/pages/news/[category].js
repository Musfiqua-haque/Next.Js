function ArticleLitByCategory({articles,category}){
    return(
        <>
            <h1>Showing the list of category style <i>{category}</i> </h1>
            {articles.map((article)=>{
                return(
                    <div key={article.id}>
                        <h2>{article.id} {article.title}</h2>
                        <p>{article.description}</p>
                        <hr />
                    </div>
                )
            })}
        </>
    )
}

export default ArticleLitByCategory;

export async function getServerSideProps(context){
    const {params} = context;
    const{category} = params

    const res = await fetch(`http://localhost:4000/news?category=${category}`)
    const data = await res.json();

    return{
        props:{
            articles:data,category,
        }
    }
}