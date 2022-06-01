import styled from 'styled-components'


export const ConsultationFormStyled = styled.section`


.group {
    display:grid;
    justify-content:center;
    align-items:center;
    flex-direction: row;
    position: relative;
    margin-bottom: 20px;
    margin-top: 1px;
    border-bottom:2px solid #6d6b6b;
}
.input-fieldA{
    font-size: 18px;
    display: block;
    width: 100%;
    min-height: 90px;
    border: none;
    border-bottom: 1px solid #757575;
}
.input-fieldA:focus {
    outline: none;
    padding: 1rem;
    // padding-top: 1rem;
}
.group label {
    color: #999;
    font-size: 18px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 2rem;
    padding: 0.5rem;
    transition: 0.2s ease all;
    
    
}
/* active state */

.input-fieldA:focus ~ label,
.input-fieldA:valid ~ label {
    top: -10px;
    font-size: 1.2rem;
    color: #000000;
    
}


.bar {
    position: relative;
    display: block;
    width: 250px;
}
.bar:before,
.bar:after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #5264AE;
    transition: 0.2s ease all;
}
.bar:before {
    left: 50%;
}
.bar:after {
    right: 50%;
}
/* active state */

.input-fieldA:focus ~ .bar:before,
.input-fieldA:focus ~ .bar:after 
{
    width: 50%;
    
}


.highlight {
    position: absolute;
    height: 60%;
    width: 100px;
    top: 25%;
    left: 0;
    pointer-events: none;
    opacity: 0.5;
}
/* active state */

.input-fieldA:focus ~ .highlight {
    animation: inputHighlighter 0.3s ease;
}


@keyframes inputHighlighter {
    from {
        background: #5264AE;
    }
    to {
        width: 0;
        background: transparent;
    }
}

.create-set-container .create-set-wrapper{
    min-width: 100%;
    padding: 0.6rem 1rem;
}

.frm-wrapper{
    display:absolute;
}

.input-field{
    width:90%;
    height:2rem;
    font-size:1.2rem;
}

.input-label{
    font-size:1.5rem;
    width:90%;
    border-bottom:2px solid #6d6b6b;
}


.input-fieldA{
    width:50rem;
    height:3rem; 
    font-size:1.2rem; 
    padding-left:2.5rem;
}

.input-labelB{
    font-size:1.2rem;
    padding-top:5rem;
    width:100%;
    border-bottom:2px solid #6d6b6b;
    
}

.create-studyset-wrapper{
    max-width:95%;
    min-height:175px;
    padding-bottom: 1rem;
    display:flex;
    flex-direction: column;
    padding-top: 1rem;
    align-items:center;
    justify-content:center;
}

.create-page-container{
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
}

.create-cards{
    width:100%;
}

.control-btns{
    display: flex;
    justify-content:space-evenly;
    color: rgb(19, 19, 41);
    
   
}
.btn{
    background-color:rgb(242, 247, 245);
    border: none;
    width:7rem;
    height: 2rem;
    font-size:1rem;
    padding: 0.5rem;
    margin-right: 2rem;
    border-radius:0.5rem;
    -webkit-border-radius:0.5rem;
    -moz-border-radius:0.5rem;
    -ms-border-radius:0.5rem;
    -o-border-radius:0.5rem;
}

.create-btn{
    display: flex;
    justify-content:center;
    align-items:center;
    background-color:rgb(242, 247, 245);
    border: none;
    width:30rem;
    height: 2.5rem;
    font-size:1.5rem;
    padding: 0.5rem;
    margin-right: 2rem;
    margin-top: 3rem;
    margin-bottom: 2rem;
    border-radius:0.5rem;
    -webkit-border-radius:0.5rem;
    -moz-border-radius:0.5rem;
    -ms-border-radius:0.5rem;
    -o-border-radius:0.5rem;

}

`