import { useRouter } from "next/router";

function Product({product}){

    const router = useRouter()

    if(router.isFallback){
        return <div>Loading...</div>
    }

    return(
        <div key={product.id}>
            <h2>{product.id} {product.title}</h2>
            <p>{product.price}</p>
            <p>{product.description}</p>
        </div>
    )
}

export default Product;

export async function getStaticPaths(){
    return{
        paths: [{params: {productId: "1"}}],
        fallback: true
    }
}

export async function getStaticProps(context){
    const {params} = context;
    
    const res = await fetch(`http://localhost:4000/products/${params.productId}`)
    const data = await res.json()
    
    return{
        props:{
            product:data,
        }
    }
}