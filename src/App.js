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

const App = ()=> {
  return (
  
      <FormProvider>
      <GlobalStyles />
      <Home />
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/health/consultation" element = {<Consultation />} />
          <Route path="/health/pharmacy" />
          <Route path="/accounts" />
          <Route path="/health/patients" element={<Patients />} />
          <Route path="/report" element = {<dummy /> }/>
          <Route path="/examination" element = {<Examination />} />
          <Route path="*" element = {<NotFound />} />
        </Routes>
      </Router>
    </FormProvider>
  );
}

export default App;
