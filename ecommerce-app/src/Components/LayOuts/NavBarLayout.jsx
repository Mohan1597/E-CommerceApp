import React from 'react'
import NavigationBar from '../mui-components/NavigationBar'
import { Outlet } from 'react-router-dom'

const NavBarLayout = () => {
  return (
    <>
      <NavigationBar>
        <Outlet />
      </NavigationBar>
    </>
  )
}

export default NavBarLayout