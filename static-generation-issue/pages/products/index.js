function ProductList({products}){
    return(
        <div>
            {products.map((product)=>{
                return(
                    <div key={product.id}>
                        <h2>List of products</h2>
                        <h2>{product.id} {product.title} {product.price}</h2>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}

export default ProductList;

export async function getStaticProps(){

    const res = await fetch("http://localhost:4000/products");
    const data = await res.json();

    return{
        props:{
            products:data,
        }
    }
}