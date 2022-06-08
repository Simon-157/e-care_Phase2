import React from 'react'
import SideBar from '../components/SideBar'
import { MainGridStyled } from '../components/styles/HomeStyled'
import Welcome from "../components/images/welcome.gif"
import FormProvider from '../components/Contexts/FormContext'


const Home = () =>{

    const [user] = ([]);
  return (
    <FormProvider>
        <SideBar />
        <MainGridStyled>
            {user ?<h1>Welcome Simon<img src ={Welcome} className="avatar" alt=""/></h1>: <h1>Login</h1>}
        </MainGridStyled>
    </FormProvider>

   
  )
}

export default Home