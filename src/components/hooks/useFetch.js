import { useEffect, useState } from 'react'

const useFetch = (url) => {

  const [cars, setCars] = useState([]) 
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

    useEffect(()=>{
        setLoading(true)
        fetch(url)
        .then(response => response.json())
        .then(data => setCars(data))
        .catch(error => setError("Ocurrio un error"))
        .finally(()=> setLoading(false))
       },[url])

  return { cars, loading, error }
  
}

export default useFetch
