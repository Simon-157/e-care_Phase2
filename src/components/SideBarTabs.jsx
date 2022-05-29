import React from 'react'
import ItemTabs from './ItemTabs'
import { SideBarTabsStyled } from './styles/SideBarTabs.Styled'

function SideBarTabs() {
  return (
    <>
        <SideBarTabsStyled>
            <ItemTabs />    
        </SideBarTabsStyled>
    </>
  )
}

export default SideBarTabs