import './App.css';
import { GlobalStyles } from "./components/styles/GlobalStyled";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from "./pages/Home";
import LandingPage from './pages/LandingPage';
import FormProvider from './contexts/FormContext';
// import dummy from "./pages/dummy";
import Patients from './pages/Patients';
import Login from "./pages/Login";
import Consultation from "./pages/Consultation";
import Examination from "./pages/Examination";
import UserProvider from './components/Contexts/userContext';
import PageNotFound from './pages/errors/page-not-found/PageNotFound';

const App = ()=> {
  return (
  
      <FormProvider>
      <UserProvider>
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
          <Route path="*" element = {<PageNotFound />} />
        </Routes>
      </Router>
      </UserProvider>
    </FormProvider>
  );
}

export default App;
