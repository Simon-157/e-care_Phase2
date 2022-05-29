import styled from 'styled-components'

export const ItemTabStyled = styled.div`
    display:flex;
    align-items:center;
    // justify-content:center;
    cursor:pointer;
    position:relative;
    color:#1f2349;  
   
    
    &:hover{
        border-left:5px solid #6d6b6b;
        background-color:#c2cfe8;
        padding-left:10px;
    }

    .nav-icon{
        height: 50px;
        width: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        color: #5f5f5f;
    }
    span{
        padding: 0px 0px;
        font-family:"Inter",sans-serif ;
        font-size: 1.2rem;
        text-transform: capitalize;
    }
    .avatar{
        border-radius:100px;
        width:40px;
        height:40px;
        
    }
    

`