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

function App() {
  return (
  
      <FormProvider>
      <GlobalStyles />
      <Home />

      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/health/consultation" element = {<Consultation />} />
          <Route exact path="/health/pharmacy" />
          <Route exact path="/health/accounts" />
          <Route exact path="/health/patients" element={<Patients />} />
          <Route exact path="/report" element = {<dummy /> }/>
          <Route exact path="/login" element={<Login />} />
          <Route path="*" element = {<NotFound />} />

        </Routes>

      </Router>
    
    </FormProvider>
  );
}

export default App;
