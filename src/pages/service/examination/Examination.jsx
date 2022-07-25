import {useContext} from 'react'
import { formContext } from "./../../../contexts/FormContext";

const Examination = () =>{

    const {setExaminationIsOpen} = useContext(formContext)
    return(
        <div>Examination</div>
    )
}

export default Examination