import React from 'react'
import { Logo } from '../Logo/Logo'
import { NavBar } from '../NavBar/NavBar'

export const Header = () => {
  return (
    <header className="w-full bg-primary inline-flex content-center fixed top-0 shadow-headershadow">
      <Logo />
      <NavBar />
    </header>
  )
}
