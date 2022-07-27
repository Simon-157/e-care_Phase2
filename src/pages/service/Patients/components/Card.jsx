import React from 'react'
import { PaperCardStyled } from '../../../../components/styles/PaperCard';

const Card = ({number, image}) =>{
    
    return ( 

        <PaperCardStyled >
        
            <section id="main-dashboard-content">
                <div  className="flash-div">
                    <a href={`/studyset/`} className="dash-card">
                        <button   className="flash-button"> 
                           {number.length !==0 && <><p>{number[0].tag}</p><p>{number.length}</p></>}
                            <span className="card-icon">
                                <img styles={{position:"absolute", top:"10rem", height: '2rem', width: '0.5rem'}} src={image} alt=""/>
                            </span>
                            
                        </button>
                    </a>
                </div>
            </section>
        </PaperCardStyled>
    )
}


export default Card;
