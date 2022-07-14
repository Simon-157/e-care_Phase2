import React from 'react'
import ItemTabs from './ItemTabs'
import { SideBarTabsStyled } from './styles/SideBarTabs.Styled'

const SideBarTabs = () =>{
  return (
    <>
        <SideBarTabsStyled>
            <ItemTabs />    
        </SideBarTabsStyled>
    </>
  )
}

export default SideBarTabs