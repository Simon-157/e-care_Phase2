import React, {createContext, useState} from 'react';

export const formContext = createContext();

const FormProvider = ({children}) =>{

    const [patientFormIsOpen, setPatientFormIsOpen] = useState(false);
    return (

        <formContext.Provider value={{patientFormIsOpen, setPatientFormIsOpen}}>

            {children}
        </formContext.Provider>
    );

}
export default FormProvider;


