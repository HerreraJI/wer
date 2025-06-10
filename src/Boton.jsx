import React from 'react'
import './Boton.css'
import { useState } from 'react'

export const Boton = () => {
  const [isOpen, setIsOpen] = useState(false)


  let texto = isOpen ? 'cerrar' : 'abrir'
  let buttonClassName = isOpen ? 'button abierto' : 'button'

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <button className={buttonClassName} onClick={handleClick}>
      {texto}
      <span className ='leer'>Leer</span>
    </button>
  )
}
