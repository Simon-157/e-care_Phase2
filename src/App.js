import './App.css';
import { GlobalStyles } from "./components/styles/GlobalStyled";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from './pages/service/home/Home';
import LandingPage from './pages/LandingPage';
import FormProvider from './contexts/FormContext';
// import dummy from "./pages/dummy";
import Patients from './pages/service/Patients/Patients';
import Login from "./pages/auth/login/Login";
import Consultation from './pages/service/consultation/Consultation';
import Examination from './pages/service/examination/Examination';
import UserProvider from "./contexts/userContext";
import PageNotFound from './pages/errors/page-not-found/PageNotFound';
import ProtectedRoutes from './utilities/ProtectedLayout';


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
          <Route path="/accounts" />
          <Route path="/report" element = {<dummy /> }/>
          <Route element={<ProtectedRoutes/>}>
              <Route path='/health/patients' element={<Patients />} />
          </Route>
          <Route element={<ProtectedRoutes/>}>
              <Route path='/health/consultation' element={<Consultation />} />
          </Route>
          <Route element={<ProtectedRoutes/>}>
              <Route path='/health/examination' element={<Examination />} />
          </Route>
          <Route path="*" element = {<PageNotFound />} />
        </Routes>
      </Router>
      </UserProvider>
    </FormProvider>
  );
}

export default App;
