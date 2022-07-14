import React from 'react'
import logo from "./images/logo.png"
import { HeaderStyles } from './styles/Header.Styled'

const HeaderBar = () =>{
  return (
    <>
       <HeaderStyles >
        <div>
            <img 
            src={logo} 
            alt = "logo"
            />

        </div>
        </HeaderStyles>
        
   
    </>
  )
}

export default HeaderBar