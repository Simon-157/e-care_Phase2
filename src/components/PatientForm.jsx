import React, {useContext, useState} from 'react'
import Modal from 'react-modal'
import axios from 'axios'
import { formContext } from './Contexts/FormContext'
import 'animate.css'
import { FormStyled } from './styles/Form.Styled'




const PatientForm = () => {

  const {patientFormIsOpen, setPatientFormIsOpen} = useContext(formContext)
  // const [title, setTitle] = useState('')
  // const [subContent, setSubContent] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState(+233000000000)
  const [email, setEmail] = useState("")
  const [dob, setDob] = useState(Date.now())
  const [pTitle, setPTitle] = useState("")
  const [nhisStatus, setNhisStatus] = useState("")
  const [facilityUnit, setFacilityUnit] = useState("")
  const [specInstruct, setSpecInstructions] = useState("")


  const handleSubmit = (e) => {

      e.preventDefault()
      const patient = {
        name,
        phone,
        email,
        dob,
        pTitle, 
        nhisStatus,
        facilityUnit,
        specInstruct,
      }
      console.log(patient)
      axios({
        method: 'post',
        url: 'http://localhost:5000/registerPatient',
        withCredentials: true,
        data:patient
        })
        .then((response)=>{
          console.log(response)
         
        })
        .catch(err => {console.log(err)})
        
  
    }

  
  
  const handleModal = () => {
    setPatientFormIsOpen(false)
  }
  
  return (
    <>
        
        <Modal
        className='animate__animated animate__fadeInUp animate__faster'
        isOpen={patientFormIsOpen}
        style={{
            
            overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.65)',
                zIndex: 10000
              },
              content: {
                margin: "auto",
                maxWidth: "50vw",
                maxHeight: "60vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: 'absolute',
                top: '40px',
                left: '40px',
                right: '40px',
                bottom: '40px',
                border: '1px solid #ccc',
                background: '#fff',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                borderRadius: '4px',
                outline: 'none',
                padding: '20px'
              }
            }}
            
            >
           <FormStyled>
               <div className="form-header"><h2>FILL PATIENT DETAILS</h2></div>
           <button onClick={handleModal} className='close-btn'>&times;</button>
            
           <form class="myForm">
                <label for="customer_name">Name </label>
                <input type="text" name="customer_name" id="customer_name" required onChange={(e) => {setName(e.target.value)}}/>

                <label for="phone_number">Phone </label>
                <input type="tel" name="phone_number" id="phone_number" onChange={(e) => {setPhone(e.target.value)}}/>

                <label for="email_address">Email </label>
                <input type="email" name="email_address" id="email_address" onChange={(e) => {setEmail(e.target.value)}}/>
                <label for="pickup_time">Date of Birth</label>
                <input type="datetime-local" name="pickup_time" id="pickup_time" required onChange={(e) => {setDob(e.target.value)}}/>

                <fieldset onChange={(e) => {setPTitle(e.target.value)}}>
                    <legend>What is your preferred title?</legend>
                    <label> <input type="radio" name="taxi" id="taxi_car" required value="car" /> Mr</label>
                    <label> <input type="radio" name="taxi" id="taxi_van" required value="van" /> Mrs </label>
                    <label> <input type="radio" name="taxi" id="taxi_tuk" required value="tuktuk" /> Dr </label>
                    <label> <input type="radio" name="taxi" id="taxi_tuk" required value="tuktuk" /> Prof </label>
                </fieldset>

                <fieldset onChange={(e) => {setNhisStatus(e.target.value)}}>
                    <legend>Is Patient NHIS Subscriber?</legend>
                    <label> <input type="radio" name="taxi" id="taxi_car" required value="car" /> Yes</label>
                    <label> <input type="radio" name="taxi" id="taxi_van" required value="van" /> No </label>
                    
                </fieldset>




                <label for="pickup_time">Registration Date/Time</label>
                <input type="datetime-local" name="pickup_time" id="pickup_time" required />

                <label for="pickup_place">Facility Name/Unit</label>
                <input type="text" name="dropoff_place" id="dropoff_place" required list="destinations" onChange={(e) =>{setFacilityUnit(e.target.value)}}/>

                <label for="comments">Special Instructions</label>
                <textarea name="comments" id="comments" maxlength="500" onChange={(e) =>{setSpecInstructions(e.target.value);}}></textarea>

                <button className="post-btn" onClick={handleSubmit}>ADD</button>

            </form>
            </FormStyled>
            
        </Modal>
        
    </>
  )
}

export default PatientForm