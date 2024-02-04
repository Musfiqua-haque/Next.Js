import { useRouter } from "next/router";

function Doc(){
    const router = useRouter();
    const {params = []} = router.query;
    console.log(params);

    if(params.length===2){
        return <h2>viewing docs for {params[0]} and {params[1]}</h2>
    }

    else if(params.length===1){
        return <h2>viewing docs for {params[0]}</h2>
    }
    return <h1>Docs Home page</h1>
}

export default Doc;