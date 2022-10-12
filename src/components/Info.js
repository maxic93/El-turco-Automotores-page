import React from 'react'
import styled from 'styled-components'

const Info = () => {
  return (
    <Section>
      <Container>
        <H1>Bienvenidos a El Turco Automotores</H1>
        <P>Contamos con una excelente atencion al cliente, especializados en cada segmendo del vehículo, seguridad, confort, para ayudarlo a seleccionar su vehículo ideal.</P>
        <P>Tenemos los mejores vehículos, usados y 0 km.</P>
      </Container>
    </Section>
  )
}

const Section = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 100px;
    background-image: url(https://www.diariomotor.com/imagenes/2017/11/infiniti-qx50-2018-28.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    @media (max-width: 600px) {
      padding: 20px;
    }
`

const Container = styled.div`
    width: 90%;
    padding: 5px;
    background: #FF4747;
`

const H1 = styled.h1`
    font-size: 2.5em;
    font-weight: 900;
    color: #f5f5f5;
    text-align: center;
    padding: 10px;
    font-family: 'Volkhov', serif;
`

const P = styled.p`
    margin-top: 10px;
    font-weight: 600;
    color: #f5f5f5;
    padding: 5px;
    font-size: 1.2em;
    font-family: 'Volkhov', serif;
`

export default Info
