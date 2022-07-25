import styled from 'styled-components'

export const PaperCardStyled = styled.div`

.flash-div{
    width:0px;
    margin:1rem auto;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    height: 6rem;
    
  }
  
  
  .flash-button{
    width:250px;
    padding:15px;
    font-size: 17px;
    height:7rem;
    border: none;
    outline:none;
    cursor: pointer;
    font-weight:500;
    border-radius:8px;
    background-color:#DED8D8;
    color:#636262;
    box-shadow: 0 8px 16px 0 rgba(95, 90, 90, 0.3);
  
  }
  
  .flash-button:hover{
      box-shadow: 0 8px 16px 0 rgba(20, 20, 20, 0.3);
      cursor:pointer;
  }


  #main-dashboard-content {
    margin-left: 300px;
    box-sizing: border-box;
    height: 100%;
    // padding: 20px 25px;
    // transition: 400ms margin-left;
  }


  @media (max-width: 1400px) {
    #grid-container {
      grid-template-columns: 100%;
    }
  }
  
  @media (max-width: 950px) {
    .title-container h1 {
      display: none;
    }
    .links span {
      display: none;
    }

    #main-dashboard-content {
      margin-left: 75px;
    }
    .title-container {
      padding: 20px;
    }
  }
  
  .card-icon{
    width:50px;
    height:50px;
  }
  
img{
  height:50px !important;
  width:50px;
}


`