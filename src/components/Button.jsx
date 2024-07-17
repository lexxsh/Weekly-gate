import React from 'react'
import { FaRocket, FaFileAlt } from 'react-icons/fa'
import './Button.css'

const Button = ({ type }) => {
  return (
    <button className={`button ${type}`}>
      {type === 'explore' && <FaRocket />}
      {type === 'create' && <FaFileAlt />}
      <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
    </button>
  )
}

export default Button
