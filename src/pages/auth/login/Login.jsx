import Google from "../../../media/google.png"
import { Link } from 'react-router-dom';
import { LoginPageStyled } from "./LoginPage.Styled";


const Login = () => {
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  

  return (
    <LoginPageStyled>
    <div className="login">
      
      <h1 className="loginTitle">GET STARTED VIA</h1>
      <div className="wrapper">
        <div className="left">
        <img src={Google} alt="" className="iconL" />
          <div className="loginButton google" onClick={google}>
            Google
            
          </div>
          
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">

          <input className="input-field" type="text" placeholder="Username" />
          <input className="input-field" type="text" placeholder="Password" />
          <button className="submit">Login</button><br/><br />
          <Link to="/register" className="input-fieldA">Register with email</Link>
        </div>
      </div>
    </div>

    </LoginPageStyled>
  );
};

export default Login;
