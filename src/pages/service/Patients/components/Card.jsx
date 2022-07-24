import React from 'react'
import { PaperCardStyled } from '../../../../components/styles/PaperCard';

const Card = ({number}) =>{
    
    return ( 

        <PaperCardStyled >
        
            <section id="main-dashboard-content">
                <div  className="flash-div">
                    <a href={`/studyset/`} className="dash-card">
                        <button   className="flash-button"> 
                            <p>{number[0].tag}</p>
                            <p>{number.length}</p>
                            <span className="card-icon">
                                <img src="https://img.icons8.com/bubbles/50/000000/for-experienced.png" alt=""/>
                            </span>
                            
                        </button>
                    </a>
                </div>
            </section>
        </PaperCardStyled>
    )
}


export default Card;
