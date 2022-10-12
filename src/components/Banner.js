import React from 'react'
import styled from 'styled-components'

const Banner = () => {
  return (
    <BannerContainer>
      <H1><Span>El Turco </Span>Automotores</H1>
      <Container>
        <P><i className="fa-sharp icon fa-solid fa-location-dot">  gutenber 2340 Corrientes, Capital</i></P>
        <P><i className="fa-brands icon fa-whatsapp"> 3794-022441</i></P>
        <P>Compras-Ventas-Gestorias-Financiacion</P>
      </Container>
    </BannerContainer>
  )
}

const BannerContainer = styled.div`
  background-image: url(https://autotest.com.ar/wp-content/uploads/2021/11/AUTOS-USADOS-CONCESIONARIA.jpg);
  padding: 400px 100px;
  text-align: center;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 600px;
  &:before {
    content:'';
	  position: absolute;
    top: 0;
	  bottom: 0;
	  left: 0;
	  right: 0;
	  background-color: rgba(0,0,0,0.8);
  }
`; 

const H1 = styled.h1`
  top: 200px;
  font-size: 5em;
  color: #fff;
  position: absolute;
  font-family: 'Cinzel', serif;
  @media (max-width: 600px) {
    font-size: 2.9em;
  }
`

const Container = styled.div`
  top: 590px;
  font-size: 2em;
  color: #fff;
  position: absolute;
  background: #FF4747;
  display: flex;
  padding: 10px;
  @media (max-width: 600px) {
    display: block;
  }
`

const P = styled.p`
  margin: 10px;
  font-size: .8em;
  .icon {
    font-size: .6em;
  }
  font-family: 'Roboto', sans-serif;
`
const Span = styled.span`
  color: #E80404;
`

export default Banner
