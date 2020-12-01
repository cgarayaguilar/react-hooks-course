import React from 'react'
import '../styles/components/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <h1 className="Header-title">Platzi merch</h1>
      </Link>

      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket"></i>
        </Link>
      </div>
    </div>
  )
}

export default Header
