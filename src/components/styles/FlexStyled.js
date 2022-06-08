import styled from 'styled-components'

export const FlexStyled = styled.div`

.flex-container{
    display:flex;
    flex-direction:row;
    justify-content:center;
    border-right: 0.3rem solid #6d6b6b;
    padding-right: 1rem;
  }
.flex-items{
border-left: 0.3rem solid #6d6b6b;
padding-left: 5rem;
padding-right: 2rem;
}

.flex-items > p{
    cursor:pointer;
}


`