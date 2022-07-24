import React from 'react'
import { ItemTabStyled } from './styles/ItemTab.Styled'
import Avartar from '../media/images.jpg'

const ItemTabs = () =>{
    return (
        <>

            <a href="/health/accounts" >
                <ItemTabStyled >

                    <div className="nav-icon"> 
                        
                    </div>
                    <span>Accounts</span>
                </ItemTabStyled>

            </a>

            <a href="/health/patients" >
                <ItemTabStyled >

                    <div className="nav-icon"> 
                        
                    </div>
                    <span>Patients</span>
                </ItemTabStyled>

            </a>

            <a href="/health/consultation" >
                <ItemTabStyled >

                    <div className="nav-icon"> 
                        
                    </div>
                    <span>Consultation</span>
                </ItemTabStyled>

            </a>

            <a href="/examination" >
                <ItemTabStyled >

                    <div className="nav-icon"> 
                        
                    </div>
                    <span>Examination</span>
                </ItemTabStyled>

            </a>

            <a href="/pharmacy" >
                <ItemTabStyled >

                    <div className="nav-icon"> 
                        
                    </div>
                    <span>Pharmacy</span>
                </ItemTabStyled>

            </a>

            <a href="/home/records">
                <ItemTabStyled >

                    <div className="nav-icon"> 
                        
                    </div>
                    <span>Records</span>
                </ItemTabStyled>

            </a>


            <a href="/home/health/faqs">
                <ItemTabStyled >

                    <div className="nav-icon"> 
                        
                    </div>
                    <span>FAQS</span>
                </ItemTabStyled>

            </a>

            <a href="/health/report">
                <ItemTabStyled >

                    <div className="nav-icon"> 
                        
                    </div>
                    <span>Report</span>
                </ItemTabStyled>

            </a>
            <a href="/profile">
                <ItemTabStyled >

                    <span>
                        <img className="avatar" 
                    
                        src = {Avartar}
                        alt="profile"
                        />
                  
                     </span>
                </ItemTabStyled>

            </a>
            <a href="/home">
                <ItemTabStyled >

                    <div className="nav-icon"> 
                        
                    </div>
                    <span>Logout</span>
                </ItemTabStyled>

            </a>



        </>
    
  )
}

export default ItemTabs