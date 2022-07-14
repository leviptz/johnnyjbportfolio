import React, { useState } from 'react'

export const NavBar = () => {
  const [nav] = useState(["beats", "production", "about"])

  return (
    <nav className="flex justify-end w-full">
        <ul className="inline-flex justify-end">
            {nav.map(item => {
               return <li className='sm:m-4 mx-0 my-4 list-none'><button className="sm:hover:bg-lightPrimary p-3 rounded-xl">{item}</button></li>
            })}
        </ul>
    </nav>
  )
}
