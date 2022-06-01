import {useContext} from 'react'
import { formContext } from '../components/Contexts/FormContext'
import { ActionButtonStyled } from '../components/styles/ActionButton';
import { StyledContainer } from '../components/styles/Container.Styled';
import { TableStyled } from '../components/styles/TableStyled';
import {data} from "./PatientsDummy"


// Example of a data array that
// you might receive from an API


function ConsultationList() {

    const {setPatientFormIsOpen} = useContext(formContext);

    const openPatientForm = () =>{
        setPatientFormIsOpen(true);
    }

return (
    <>
        <StyledContainer>
                    

            <div className="item-container">
            
                <TableStyled>
                    
                    <table>
                        <tr>
                        <th style={{alignItems:"self-start !important"}}>Patuents Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Examination</th>
                        <th>Diagnosis</th>
                        <th>Prescription</th>
                        </tr>
                        {(data).map((val, key) => {
                        return (
                            <tr key={key}>
                            <td>{val.name} {val.LastName}</td>
                            <td>{val.age}</td>
                            <td>{val.gender}</td>
                            <td>
                                <ActionButtonStyled>
                                    Pending!
                                </ActionButtonStyled>
                            </td>
                            <td>
                                <ActionButtonStyled>
                                    Done!
                                </ActionButtonStyled>
                            </td>
                            <td>
                                <ActionButtonStyled>
                                    Pending!
                                </ActionButtonStyled>
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

export default ConsultationList;
