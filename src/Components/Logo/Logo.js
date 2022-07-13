import React from 'react'

export const Logo = () => {
  return (
    <div className="inline-flex items-center">
        <div className="grid place-items-center px-2 shrink-0">
            <img className="w-14" alt="logo" src={require("../../resources/logo.png")}></img>
        </div>
        <h1 className="text-xl invisible sm:visible">JohnnyJB</h1>
    </div>
  )
}
