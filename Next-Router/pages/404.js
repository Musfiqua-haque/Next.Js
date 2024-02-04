// function ErrorPage(){
//     return <h1>Styling 404 page</h1>
// }

// export default ErrorPage;

import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.log(error)
  }, [error])
 
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={() => reset()}>
        Try again
      </button>
    </div>
  )
}