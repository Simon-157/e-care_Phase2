import {useContext, useEffect, useState} from 'react'
import { formContext } from '../components/Contexts/FormContext'
import { ActionButtonStyled } from '../components/styles/ActionButton';
import { ButtonStyled } from '../components/styles/Button.Styled';
import { StyledContainer } from '../components/styles/Container.Styled';
import { NavSection } from '../components/styles/NavSection';
import { SearchBarStyled } from '../components/styles/SearchBar.Styled';
import { TableStyled } from '../components/styles/TableStyled';
import {data} from "./PatientsDummy"
import { DashStyled } from "./../components/styles/Dash.Styled";
import Card from "./../components/Card";


// Example of a data array that
// you might receive from an API


const PatientsList = () =>{

    const {setPatientFormIsOpen} = useContext(formContext);
 
    const [dataArray] = useState(data)
    const [patients, setPatients] = useState(dataArray)
    const [title, setTitle] = useState(" ")
    const [numberMales, setNumberMales] = useState([{tag:"MALES"}])
    const [numberFemales, setNumberFemales] = useState([{tag:"FEMALES"}])

    var mArray = [{tag:"MALES"}];
    var fArray = [{tag:"FEMALES"}];
    const count = () => {

        for(let i=0; i<dataArray.length; i++){
            if(dataArray[i].gender.toLowerCase() === 'male' && !mArray.includes(dataArray[i])){
                
                mArray.push(dataArray[i]);
            }
            else if(dataArray[i].gender.toLowerCase() === 'female' && !fArray.includes(dataArray[i])){
                fArray.push(dataArray[i]);
            }
            
        }

        setNumberMales(mArray)
        setNumberFemales(fArray)
        console.log(numberMales)
        console.log(numberFemales)
        
        }
    
    const filter = (e) => {
        const searchTitle = e.target.value
        setTitle(searchTitle);
    
        
        if(searchTitle !== " "){
    
            const results = dataArray.filter((patient) => {
            return patient.name.toLowerCase().includes(searchTitle.toLowerCase()) || patient.LastName.toLowerCase().includes(searchTitle.toLowerCase());
            });
            setPatients(results)
    
        }
        else{
            setPatients(dataArray)
        }
      
    }


    const openPatientForm = () =>{
        setPatientFormIsOpen(true);
    }

    useEffect(() =>{
        count()
    }, [patients])


return (
    <>
        <DashStyled >
            <Card number = {patients} />  
            <Card number = {numberMales} />  
            <Card number = {numberFemales}/>  
         
        </DashStyled>
        
        <NavSection >
            
            <h2>REGISTERED PATIENTS</h2>
            
            <ButtonStyled >
                <div onClick={openPatientForm}>Add Patient</div>
            </ButtonStyled>
        </NavSection>
        
        <StyledContainer>
            <SearchBarStyled>
                <input className="search-input" 
                    type="search" 
                    name={title} 
                    onChange={filter} 
                    placeholder="Search for a registered patient" 
                />
                
            </SearchBarStyled>
                    
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
                        {(patients).map((val, key) => {
                        return (
                            <tr key={key}>
                            <td>{val.name}</td>
                            <td>{val.LastName}</td>
                            <td>{val.age}</td>
                            <td>{val.gender}</td>
                            <td>
                                <ActionButtonStyled>
                                    Send to Next
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

export default PatientsList;
