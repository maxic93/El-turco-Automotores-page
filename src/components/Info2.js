import React from 'react'
import styled from 'styled-components'

const Info2 = () => {
  return (
    <Section>
        <Container>
            <CarInfo>
                <i className="fa-sharp fa-solid fa-money-bill"></i>
                <H2>Recibimos tu usado</H2>
            </CarInfo>
            <CarInfo>
                <i className="fa-solid fa-car-side"></i>
                <H2>0 Km !Muchas Marcas!</H2>
            </CarInfo>
            <CarInfo>
                <i className="fa-sharp fa-solid fa-scroll"></i>
                <H2>Financiacion</H2>
            </CarInfo>
        </Container>
    </Section>
  )
}
const Section = styled.section`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
backgorund: #f5f5f5;
padding: 100px;
 @media (max-width: 600px) {
    padding: 5px;
}
`
const Container = styled.div`
    width: 80%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`
const CarInfo = styled.div`
    width: 360px;
    padding: 20px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow:1px 1px 8px #999;
    margin: 10px;
    background: #fff;
    .fa-solid {
        font-size: 2em;
        padding: 10px
    }
`
const H2 = styled.h2`
    font-size: 1.5em;
    font-family: 'Volkhov', serif;
    font-weight: 100;
`

export default Info2
