import useSWR from "swr"

const fetcher = async()=>{
    const res = await fetch("http://localhost:4000/dashboard")
    const data = await res.json()
    return data;
}

function DashboardSwr(){
    const {data, error} = useSWR('dashboard', fetcher) 
    if(error) return "An error is occur"
    if(!data) return"Loading"

    return (
        <div>
            <h2>Dashboard</h2>
            <h2>Posts - {data.posts}</h2>
            <h2>Likes - {data.likes}</h2>
            <h2>Followers - {data.followers}</h2>
            <h2>Following - {data.following}</h2>
        </div>
    )
}

export default DashboardSwr;