import React, { useContext } from 'react'
import ItemTabs from './ItemTabs'
import { SideBarTabsStyled } from './styles/SideBarTabs.Styled'
import { userContext } from "./../contexts/userContext";

const SideBarTabs = () =>{
  const {user} = useContext(userContext)
  return (
    <>
        <SideBarTabsStyled>
            <ItemTabs user={user}/>    
        </SideBarTabsStyled>
    </>
  )
}

export default SideBarTabs