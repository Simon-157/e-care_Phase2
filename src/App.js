import './App.css';
import { GlobalStyles } from "./components/styles/GlobalStyled";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from "./pages/Home";
import LandingPage from './pages/LandingPage';
import FormProvider from './components/Contexts/FormContext';
// import dummy from "./pages/dummy";
import Patients from './pages/Patients';
import NotFound from "./pages/404Page";
import Login from "./pages/Login";
import Consultation from "./pages/Consultation";
import Examination from "./pages/Examination";

function App() {
  return (
  
      <FormProvider>
      <GlobalStyles />
      <Home />

      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="https://ecareclient.netlify.app/login" element={<Login />} />
          <Route exact path="https://ecareclient.netlify.app/health/consultation" element = {<Consultation />} />
          <Route exact path="https://ecareclient.netlify.app/health/pharmacy" />
          <Route exact path="https://ecareclient.netlify.app/health/accounts" />
          <Route exact path="https://ecareclient.netlify.app/health/patients" element={<Patients />} />
          <Route exact path="https://ecareclient.netlify.app/report" element = {<dummy /> }/>
          <Route path="https://ecareclient.netlify.app/health/examination" element = {<Examination />} />
          <Route path="*" element = {<NotFound />} />

        </Routes>

      </Router>
    
    </FormProvider>
  );
}

export default App;
