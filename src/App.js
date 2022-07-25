import { useContext } from 'react';
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
import UserProvider, { userContext } from "./contexts/userContext";
import PageNotFound from './pages/errors/page-not-found/PageNotFound';
import { ProtectedLayout } from './utilities/ProtectedLayout';


const App = ()=> {

  const {user} = useContext(userContext)
  return (
  
      <FormProvider>
      <UserProvider>
      <GlobalStyles />
      <Home />
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/login" element={!user?<Login />:<LandingPage />} />
          <Route path="/accounts" />
          <Route path="/report" element = {<dummy /> }/>
          <Route path="/health" element = {<ProtectedLayout />}>
            <Route path="consultation" element = {<Consultation />} />
            <Route path="pharmacy" />
            <Route path="patients" element={<Patients />} />
            <Route path="examination" element = {user?<Examination />:<Login />} />
          </Route>
          <Route path="*" element = {<PageNotFound />} />
        </Routes>
      </Router>
      </UserProvider>
    </FormProvider>
  );
}

export default App;
