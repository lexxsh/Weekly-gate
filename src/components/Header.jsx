import React from 'react'
import './Header.css'
import { FaWallet, FaSearch, FaFire } from 'react-icons/fa'
function Header() {
  return (
    <header className="header">
      <div className="logo">
        <FaFire
          style={{ color: '#6E56EF', fontSize: '24px', marginRight: '10px' }}
        />
        <span>타임 캡슐</span>
      </div>
      <nav className="nav">
        <a href="#home">Home</a>
      </nav>
      <div className="search-wallet">
        <FaSearch color="white" />
      </div>
    </header>
  )
}

export default Header
