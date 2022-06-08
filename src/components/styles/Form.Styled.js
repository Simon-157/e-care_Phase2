import styled from 'styled-components'

export const FormStyled = styled.form`



.close-btn{
    position: absolute;
    cursor:pointer;
    right: 0;
    top: 0;
    font-size: 2rem;
    color:red;
    background:#6d6b6b;
    border-radius: 100%;
    border: none;
    width: 2rem;
    margin-right: 0.4rem;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    -ms-border-radius: 100%;
    -o-border-radius: 100%;
}

.form-header{
    font-size: 3ch;
    background-color: #c2cfe8;
    width:100%;
}
.post-btn{
    align-self: baseline;
    min-width: 30%;
    padding: 1rem;
    font-size: 18px;
    font-weight: bold;
    margin-bottom:1rem;
    border: none;
    border-radius: 15px;
    background-color:#6d6b6b;
    cursor:pointer;
    
}



  .myForm {
    display: grid;
    grid-template-columns: [labels] auto [controls] 1fr;
    grid-auto-flow: row;
    grid-gap: .8em .5em;
    background: #c2cfe8;
    padding: 1.2em;
    font-size: 1.2em;
    min-width: 45vw;
    padding: 0 1rem;
    margin-top: 2rem;
  }
  .myForm > label,
  .myForm > fieldset  {
    grid-column: labels;
    grid-row: auto;
  }
  .myForm > input, 
  .myForm > select,
  .myForm > textarea,
  .myForm > button {
    grid-column: controls;
    grid-row: auto;
    padding: .4em;
    border: 0;
  }
  .myForm > fieldset {
    grid-column: span 2;
  }  
  .myForm > button {
    background: #6d6b6b;
    color: white;
    }
  .myForm > textarea {
    min-height: 3em;
    }


`