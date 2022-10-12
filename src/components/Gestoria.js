import React from 'react'
import styled from 'styled-components'

const Gestoria = () => {
  return (
    <Section>
        <Container>
           <ContainerInfo>  
           <H2>Gestoria</H2>
                <span className='span'></span>
                <P>Para asegurar todo el proceso de compra y venta de automóviles, en El turco tenemos una gestoria propia permanente que te garantizará toda la documentación vehicular. Además, todos los autos usados comercializados están a nombre de El Turco Automotores.</P>
            </ContainerInfo> 
            <img className='img' src='https://www.carone.com.ar/wp-content/uploads/2022/01/foto-escribania.jpg'/>
        </Container>
    </Section>
  )
}
const Section = styled.section`
width: 100%;
display: flex;
padding: 90px 30px;
align-items: center;
justify-content: center;
background: #f5f5f5; 
@media (max-width: 600px) {
    padding: 40px 30px;
  }
`
const Container = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .img {
        width: 600px;
    }
    @media (max-width: 600px) {
        .img {
            width: 350px;
        }
      }
    
`
const ContainerInfo = styled.div`
display: flex;
flex-direction: column;
padding: 0px 40px;
.span {
    width: 60px;
    height: 4px;
    background: #FF4747;
}
    @media (max-width: 600px) {
        padding: 0px;
      }
`
const H2 = styled.h2`
    font-size: 2.3em;
    color: #408DD5;
    margin: 10px 0;
    font-family: 'Cinzel', serif;
`
const P = styled.p`
font-family: 'Roboto', sans-serif;
font-weight: 400;
margin: 10px 0;
width: 600px;
font-size: 1.2em;
@media (max-width: 600px) {
        width: 350px;
  }
`

export default Gestoria
