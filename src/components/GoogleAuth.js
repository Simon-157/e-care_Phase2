// import './';
import GoogleLogin from 'react-google-login';


const Login =() =>{

  const google = () => {
    window.open("http://localhost:5000/auth/google");
  };
  return (
    <div className="App">
      <header className="App-header">
        
            <GoogleLogin className="btn"
             onClick={google}
            ></GoogleLogin>
        
      </header>
    </div>
  );
}

export default Login;