import React from 'react'
import SideBar from '../components/SideBar'
import { MainGridStyled } from '../components/styles/HomeStyled'
import Welcome from "../components/images/welcome.gif"
import FormProvider from '../components/Contexts/FormContext'


function Home() {
  return (

    
    <FormProvider>
        
        <SideBar />
        <MainGridStyled>
           
            <h1>Welcome Simon<img src ={Welcome} className="avatar" alt=""/></h1>
        </MainGridStyled>
    </FormProvider>

   
  )
}

export default Home