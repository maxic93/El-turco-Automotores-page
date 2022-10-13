import React from 'react'
import styled from 'styled-components'

const Car = ({img, name, price, year, km}) => {
  return (
    <Container>
      <img className='img' src={img}/>
      <Div>
        <h3 className='name'>{name}</h3>
        <p className='price'>${price}</p>
      </Div>
      <Div2>
        <p className='modelo'>Modelo: {year}</p>
        <p className='km'>km: {km}</p>
      </Div2>
    </Container>
  )
}

const Container = styled.div`
width: 
display: flex;
justify-content: center;
margin: 0 10px 50px 10px;
    .img {
        width: 340px;
        height : 250px;
        margin: 5px:
        cursor: pointer;
    }
`
const Div = styled.div`
font-family: 'Volkhov', serif;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 5px 20px 5px;
    border-bottom: 1px solid #CCCCCC;
    .name {
        font-size: 16px;
    }
    .price {
        padding: 10px;
        background: #F75E4F;
        color: #f5f5f5;
        border-radius: 5px;
    }
`
const Div2 = styled.div`
font-family: 'Volkhov', serif;
color: #9B9B9B;
    display: flex;
    justify-content: space-between;
    padding: 10px 5px 10px 5px;
`

export default Car
