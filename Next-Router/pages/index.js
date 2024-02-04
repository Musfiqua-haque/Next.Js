import Link  from "next/link";
import { useRouter } from "next/router";

function Home(){

    const router = useRouter();


const handleClick=()=>{
    console.log('Placing order successfully');
    router.push('/products')
}
    return(
        <div>
            <h1>Home page</h1>
            <Link href='/blog'>
                Blog
            </Link>
            <br></br>
            <Link href='/products'>
                Products
            </Link>
            <br></br>
            <button onClick={handleClick}>Place order</button>
        </div>
    ) 
}
export default Home;