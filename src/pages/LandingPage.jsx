import React,{useContext} from 'react';
import { LandingPageStyled } from '../components/styles/LandingPage';
import Test from '../components/GoogleAuth'
import Slogan from '../components/Slogan'
import { userContext } from '../components/Contexts/userContext';




const LandingPage = () =>{
    const {user} =useContext(userContext);

    return (
        <LandingPageStyled >
        
            <section className="home" id="home">

                <div className="image">
                    <img src="/images/healthconcern.jpg" alt=""></img>
                </div>

                <div className="content">
                    <span>
                        <Slogan />
                    </span>
                    
                    <h3>Be prescribed and get healthier</h3>
                    {!user && <a href="/login" className="btn"><Test className="btn" /></a>}

                </div>

            </section>
        </LandingPageStyled>

    )
}

export default LandingPage;