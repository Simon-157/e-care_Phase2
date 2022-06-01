import styled from "styled-components";

export const MainGridStyled = styled.section`
  
  margin-left: 200px;
  box-sizing: border-box;
  height: 100%;
  padding: 20px 25px;
  transition: 400ms margin-left;
  font-size:14px;
  background-color: #8593ad;
  box-shadow: 5px 5px 5px 1px #6d6b6b;

  @media (max-width: 950px) {
    margin-left: 75px;
    margin-top:5px;
  }

  .avatar{
    border-radius:100px;
    width:30px;
    height:30px;
    
}
h1{
  position:relative;
  height:2rem;
  width:100%;
  margin:0;
  align-items:center;
  text-align:right  ;
}


`