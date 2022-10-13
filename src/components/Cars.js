import React from 'react'
import useFetch from './hooks/useFetch'
import Car from './Car'
import styled from 'styled-components'

const Cars = () => {
    const {cars, loading, error} = useFetch("https://warm-springs-35828.herokuapp.com/api")
    
  return (
    <Section>
      {
        cars.map(car => {
          console.log(car)
          return <Car key={car._id} img={car.img} name={car.name} price={car.price} year={car.year} km={car.km}/>
          
        })
      }
    </Section>
  )
}

const Section = styled.section`
padding: 60px 0 60px 0px;
width: 100%;
display: flex;
justify-content: center;
flex-wrap: wrap;
`

export default Cars
