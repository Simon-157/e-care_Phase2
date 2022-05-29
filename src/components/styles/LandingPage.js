import styled from 'styled-components'

export const LandingPageStyled= styled.div`



@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700&display=swap');

:root{
  --green:#27ae60;
  --black:#2c2c54;
  --background:white;
  --bg2:#eee;
  --abouttext:rgba(21, 9, 71, 0.514);
  --tog:rgba(122, 122, 179, 0.767);
  --button:#2c2c54;
  --hbtn:rgba(122, 122, 179, 0.767);

}

[dark-mode='dark']{
  --green:#52e690;
  --black:#cccce6;
  --background:rgba(2, 7, 29, 0.938);
  --bg2:rgba(2, 7, 29, 0.9);
  --abouttext:rgba(131, 147, 155, 0.835);
  --tog:rgba(18, 150, 155, 0.329);
  --button:rgba(31, 132, 141, 0.767);
  --hbtn:rgba(9, 107, 9, 0.767);
}

*{
  font-family: 'Nunito', sans-serif;
  margin:0; padding:0;
  box-sizing: border-box;
  outline: none; border:none;
  text-decoration: none;
  text-transform: capitalize;

}

*::selection{
  background:var(--green);
  color:#fff;
}
#menu-bar{
  font-size: 3rem;
  border-radius: .5rem;
  border:.1rem solid var(--black);
  padding:.8rem 1.5rem;
  color:var(--black);
  cursor: pointer;
  display: none;
}

.home{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding:9%;
}

.home .image{
  flex:1 1 40rem;
  padding-top: 5rem;

}

.home .image img{
    border-radius: 100px;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    -ms-border-radius: 100px;
    -o-border-radius: 100px;
    width:100%;
}


.home .image img:hover {
    -webkit-transform: skew(20deg);
    -moz-transform: skew(20deg);
    -o-transform: skew(20deg);
    -ms-transform: skew(20deg);
    transform: translate(3em,0);
    animation: skewK 3s infinite;
    transform: skew(20deg);
    box-shadow:rgba(2, 20, 77, 0.589) 0px 30px 90px;
}


@keyframes skewK {
    0% {
      transform: skewX(10deg);
      -webkit-transform: skewX(10deg);
      -moz-transform: skewX(10deg);
      -ms-transform: skewX(10deg);
      -o-transform: skewX(10deg);
}

    50%{
        transform: scale(1.0)    ;
        -webkit-transform: scale(1.0)    ;
        -moz-transform: scale(1.0)    ;
        -ms-transform: scale(1.0)    ;
        -o-transform: scale(1.0)    ;
}
    100% {
      transform: skewX(-10deg);
      -webkit-transform: skewX(-10deg);
      -moz-transform: skewX(-10deg);
      -ms-transform: skewX(-10deg);
      -o-transform: skewX(-10deg);
}
  }
  
.home .content{
  flex:1 1 40rem;
  text-align: center;
}

.home .content span{
  font-size: 1.5rem;
  color:#666;
}

.home .content h3{
  font-size: 2rem;
  
  color:var(--black);
}


.home .content span{
text-transform: uppercase;
 background-image: linear-gradient(
   -225deg,
   #231557 0%,
   rgb(156, 58, 18) 15%,
   #44107a 29%,
   #da4156 67%,
   #fff800 100%
 );
 background-size: 200% auto;
 color: #fff;
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



`