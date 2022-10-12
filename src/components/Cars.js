import React from 'react'
import useFetch from './hooks/useFetch'

const Cars = () => {
    const data = useFetch("https://warm-springs-35828.herokuapp.com/api")
    console.log(data)
  return (
    <div>
      
    </div>
  )
}

export default Cars
