import {useContext} from 'react'
import { formContext } from '../../../../contexts/FormContext'
import { ActionButtonStyled } from '../../../../components/styles/ActionButton';
import { StyledContainer } from '../../../../components/styles/Container.Styled';
import { TableStyled } from '../../../../components/styles/TableStyled';
import {data} from "../../Patients/components/PatientsDummy"
import ExaminationForm from '../../examination/components/ExaminationForm'


const ConsultationList = () =>{
    
    const {setExaminationFormIsOpen, setActivePatient} = useContext(formContext)
  

    const openExaminationForm = (e) =>{
    
        setExaminationFormIsOpen(true);
        setActivePatient(e);
        return e;
    }

return (
    <>

        <ExaminationForm />
        <StyledContainer>                

            <div className="item-container">
            
                <TableStyled>
                    
                    <table>
                        <tr>
                        <th style={{alignItems:"self-start !important"}}>Name</th>
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
                                <ActionButtonStyled onClick = {(e)=>{
                                e=val
                                
                                openExaminationForm(e);
                                }
                            
                               }>
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
