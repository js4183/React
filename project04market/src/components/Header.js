import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  const linkStyle = {
    textDecoration :'none',
    color : 'green'
  }

  return (
    <h1 align="center">
      <Link to='/' style={linkStyle}>
        Campus K Market
      </Link>

      <Link to='join'>회원가입</Link>
    </h1>
  )
}

export default Header