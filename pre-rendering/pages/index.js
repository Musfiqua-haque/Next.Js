import Link from "next/link";

function Home(){
  return(
  <>
    <h1>Welcome, Next js Pre-rendering</h1>
    <Link href={'/posts'}>
      <p>Posts</p>
    </Link>
    <br></br>
    <Link href={'/comments'}>
      <p>Comments</p>
    </Link>
  </>
  ) 
}
export default Home;