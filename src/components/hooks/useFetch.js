import React, { useEffect, useState } from 'react'

const useFetch = (url) => {

    const [data, setData] = useState([]) 

    useEffect(()=>{
        fetch(url)
        .then(response => response.json())
        .then(data => setData(data));
    },[url])

  return (
    <div>
      
    </div>
  )
}

export default useFetch
