import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom'


const NavBar = () => {
  return (
    <Navbar>
      <Link to="/">El Turco Automotores</Link>
      <Link to="/contacto">Contacto</Link>
    </Navbar>
  )
}

const Navbar = styled.nav`
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 80px;
  background: #f5f5f5;
  a{
    color: #111;
    text-decoration: none;
    font-size: 1.2em;
  }
`; 


export default NavBar
