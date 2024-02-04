import Link from "next/link";

function ProductsList({productId = 100}){
    return(
        <>
        <Link href='/'>
            Home
        </Link>
        <br></br>

        <Link href='/products/1'>
        Product 1
        </Link>
        <Link href='/products/2'>
        Product 2
        </Link>
        <Link href='/products/3'replace>
        Product 3
        </Link>
        <Link href={`/products/${productId}`}>
        Product{productId}
        </Link>
        
        </>
    )
    
}
export default ProductsList;