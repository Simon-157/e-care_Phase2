import React, {useContext} from 'react'
import SideBar from './../../../components/SideBar'
import { MainGridStyled } from './../../../components/styles/HomeStyled'
import Welcome from "../../../media/welcome.gif"
import  FormProvider from "./../../../contexts/FormContext";
import { userContext } from '../../../contexts/userContext';


const Home = () =>{

    const {user}= useContext(userContext)
  return (
    <FormProvider>
        <SideBar />
        <MainGridStyled>
        {user?<h1>Welcome {user.name.split(" ")[0]}<img src ={Welcome} className="avatar" alt=""/></h1>: <h1><a href="/login">Login</a></h1>}
        </MainGridStyled>
    </FormProvider>

   
  )
}

export default Home