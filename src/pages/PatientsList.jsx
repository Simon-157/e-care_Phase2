import '../App.css';
import {useContext} from 'react'
import { formContext } from '../components/Contexts/FormContext'
import { ButtonStyled } from '../components/styles/Button.Styled';
import { StyledContainer } from '../components/styles/Container.Styled';
import { NavSection } from '../components/styles/NavSection';
import { TableStyled } from '../components/styles/TableStyled';
import {data} from "./PatientsDummy"


// Example of a data array that
// you might receive from an API


function PatientsList() {

    const {patientFormIsOpen, setPatientFormIsOpen} = useContext(formContext);

    const openPatientForm = () =>{
        setPatientFormIsOpen(true);
    }

return (
    <>
        
        <NavSection >
            <h2>REGISTERED PATIENTS</h2>
            
            <ButtonStyled >
                <div onClick={openPatientForm}>Add Patient</div>
            </ButtonStyled>
        </NavSection>
        <StyledContainer>
                    

            <div className="item-container">
            
                <TableStyled>
                    
                    <table>
                        <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Action</th>
                        </tr>
                        {(data).map((val, key) => {
                        return (
                            <tr key={key}>
                            <td>{val.name}</td>
                            <td>{val.LastName}</td>
                            <td>{val.age}</td>
                            <td>{val.gender}</td>
                            <td>
                                <ButtonStyled>
                                    Send to Next
                                </ButtonStyled>
                            </td>
                            </tr>
                        )
                        })}
                    </table>
                </TableStyled>
            
            </div>
            

        </StyledContainer>
   
        
    </>
);
}

export default PatientsList;
