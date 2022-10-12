import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterContainer>
      <H3>©Copyright 2022 El Turco Automotores, Somos una mediana empresa, que nos dedicamos a brindar soluciones de calidad para la compra o venta de autos usados y 0kms. RESOLUCIÓN INMEDIATA CONSIGNACIÓN FÍSICA CONSIGNACIÓN VIRTUAL.</H3>
      <Div><a href='https://www.instagram.com/elturcoautomotorctes/?hl=es' target="_blank"><i className="fa-brands fa-instagram"></i></a></Div>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
    height: 200px;
    background: #222;
    display: flex;
    justify-content: center;
    flex-direction: column;
`
const H3 = styled.h3`
    padding: 40px;
    color: #fff;
    font-size: 1em;
    @media (max-width: 600px) {
        padding: 20px;
        font-size: .7em;
    }
`
const Div = styled.div`
    border-top: 1px solid #f5f5f5;
    display: flex;
    justify-content: center;
    .fa-brands {
        font-size: 2em;
        padding: 7px;
        color: #fff;
    }
`

export default Footer
