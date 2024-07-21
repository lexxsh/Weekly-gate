import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { FaSearch, FaFire } from 'react-icons/fa'
function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo-link">
        <div className="logo">
          <FaFire
            style={{ color: '#6E56EF', fontSize: '24px', marginRight: '10px' }}
          />
          <span>타임 캡슐</span>
        </div>
      </Link>
      <nav className="nav">
        <div className="search-wallet">
          <FaSearch color="white" />
        </div>
      </nav>
    </header>
  )
}

export default Header
