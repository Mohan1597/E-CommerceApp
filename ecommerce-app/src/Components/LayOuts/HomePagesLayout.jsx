import React from 'react'
import Registrationlayout from './registrationlayout'
import { Outlet } from 'react-router-dom'

const HomePagesLayout = () => {
  return (
    <>
      <Registrationlayout>
         <Outlet />
      </Registrationlayout>
    </>
  )
}

export default HomePagesLayout