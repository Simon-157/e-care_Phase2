import Card from '../components/Card'
import PatientForm from '../components/PatientForm'
import SearchBar from '../components/SearchBar'
import { DashStyled } from '../components/styles/Dash.Styled'
import { NavSection } from '../components/styles/NavSection'
import PatientsList from "./PatientsList"

function Patients() {

  return (
    <>
        <PatientForm />
        <PatientsList  />  
        
    </>
  )
}

export default Patients