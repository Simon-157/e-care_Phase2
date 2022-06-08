import React, {createContext, useState} from 'react';

export const formContext = createContext();

const FormProvider = ({children}) =>{

    const [patientFormIsOpen, setPatientFormIsOpen] = useState(false);
    const [examinationFormIsOpen, setExaminationFormIsOpen] = useState(false)
    const [activePatient, setActivePatient] = useState({})
    return (

        <formContext.Provider value={{activePatient, setActivePatient, patientFormIsOpen, setPatientFormIsOpen, examinationFormIsOpen, setExaminationFormIsOpen}}>
            {children}
        </formContext.Provider>
    );

}
export default FormProvider;


