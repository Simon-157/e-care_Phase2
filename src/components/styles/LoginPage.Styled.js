import styled from 'styled-components'

export const LoginPageStyled = styled.div`

.home {
    display: flex;
    padding: 50px 100px;
    justify-content: space-between;
    flex-wrap: wrap;
   
  }
  

  
  
  .login {
    height: calc(100vh - 50px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index:10000;
    background-color:rgba(0, 0, 0, 0.65);
  }
  
  .wrapper {
    width: 60%;
    height: 75%;
    -webkit-box-shadow: 0px 5px 33px -21px rgba(66, 68, 90, 1);
    -moz-box-shadow: 0px 5px 33px -21px rgba(66, 68, 90, 1);
    box-shadow: 0px 5px 33px -21px rgba(66, 68, 90, 1);
    display: flex;
    align-items: center;
    border-radius: 20px;
    background-color: #070213b6;
  
  }
  
  
  .left,.right{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .center{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  
  .or{
    border: 3px solid lightgray;
    border-radius: 50%;
    padding: 6px;
    color: gray;
    background-color: white;
    font-weight: bold;
    font-size:0.8rem;
  }

  .orR{
    border: 3px solid #6d6b6b;
    border-radius: 50%;
    padding: 10px;
    color: gray;
    background-color: rgb(120, 224, 181);
    height:6rem;
    width:6rem;
  }



  
  .line{
    width: 0.5px;
    height: 70%;
    background-color: #6d6b6b;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: -1;
  }
  
  .loginButton{
    width: 150px;
    padding: 15px 25px;
    border-radius: 5px;
    color: white;
    display: flex;
    align-items: center;
    font-weight: bold;
    margin-bottom: 20px;
    cursor: pointer;
  }
  
  .google{
    background-color: #201d18;
    font-size:2rem;
    text-transform: uppercase;
    background-image: linear-gradient(
      -225deg,
      #231557 0%,
      rgb(156, 58, 18) 15%,
      #44107a 29%,
      #c70922bb 67%,
      #fff800 100%
    );
    background-size: 200% auto;
    color: rgb(214, 163, 163);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 2s linear infinite;
    display: inline-block;
  }


   
   @keyframes textclip {
     to {
       background-position: 200% center;
     }
   }


  .iconL{
    width: 10rem;
    height: 10rem;
    margin-right: 0.5rem;
    
    
  }
  
  .input-field{
    width:20rem;
    padding: 0.5rem 1rem;
    margin-bottom: 20px;
    font-size:1.5rem;
    border: 1px solid rgb(223, 215, 215);
    border-radius:1rem;
    -webkit-border-radius:1rem;
    -moz-border-radius:1rem;
    -ms-border-radius:1rem;
    -o-border-radius:1rem;
}

.input-fieldA{
    width:20rem;
    text-align: center;
    padding: 0.5rem 1rem;
    margin-bottom: 20px;
    font-size:1.5rem;
    border: 1px solid rgb(223, 215, 215);
    border-radius:1rem;
    -webkit-border-radius:1rem;
    -moz-border-radius:1rem;
    -ms-border-radius:1rem;
    -o-border-radius:1rem;
}
  
  .submit{
    display: block;
    width: 20rem;
    background-color: rgba(73, 231, 99, 0.671);
    color: rgb(5, 5, 56);
    font-weight: bold;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    font-size: 2rem;
  }
  
  .loginTitle{
    position: absolute;
    top: 140px;
    color: rgb(5, 128, 15);
    font-size:2rem;
    padding-top:10px;
    padding:10px;
  }
  
 
  
  @media screen and (max-width: 992px) {
    .card {
      width: 100%;
      margin-bottom: 50px;
    }
  
    .wrapper {
      width: 65%;
      height: 90%;
      flex-direction: column;
    }
  
    .loginTitle {
      display: none;
    }
  
    .center {
      width: 100%;
      position: relative;
    }
  
    .left {
      padding: 20px;
    }
  
    .right {
      padding: 20px;
    }
  
    .line {
      height: 0.5px;
      width: 300px;
    }
  }

`