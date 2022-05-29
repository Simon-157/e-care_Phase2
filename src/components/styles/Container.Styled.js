import styled from "styled-components"

export const StyledContainer = styled.div`

    margin-top:1.2em;
    margin-left:20.5em;
    box-sizing: border-box;
    height: fit-content;
    width:73.5%;
    padding: 10px 25px;
    padding-bottom:35px;
    border: 1px solid #dadada;
    border-radius: 5px;
    overflow-y: hidden;

    .item-container{
        display:grid;
        grid-gap: 0.9375rem;
        grid-template: auto/repeat(3, 1fr);
        margin-top:1.2rem;
        
    }

    h2{
        color:#697b9b;
    }

`