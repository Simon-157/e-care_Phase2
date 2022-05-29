import React from 'react'
import { SideBarStyled } from './styles/SideBar.Styled'
import HeaderBar from "./HeaderBar";
import SideBarTabs from './SideBarTabs';

function SideBar() {
  return (
    <>
        <SideBarStyled>
            <HeaderBar />
            <SideBarTabs />
        </SideBarStyled>
    
    </>
  )
}

export default SideBar