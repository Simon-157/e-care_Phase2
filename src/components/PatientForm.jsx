import React, {useState, useContext} from 'react'
import Modal from 'react-modal'
import { formContext } from './Contexts/FormContext'
import 'animate.css'
import { FormStyled } from './styles/Form.Styled'



const PatientForm = () => {

  const {patientFormIsOpen, setPatientFormIsOpen} = useContext(formContext)
  const [title, setTitle] = useState('')
  const [subContent, setSubContent] = useState('')

  
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
                <input type="text" name="customer_name" id="customer_name" required />

                <label for="phone_number">Phone </label>
                <input type="tel" name="phone_number" id="phone_number" />

                <label for="email_address">Email </label>
                <input type="email" name="email_address" id="email_address" />

                <fieldset>
                    <legend>What is your preferred?</legend>
                    <label> <input type="radio" name="taxi" id="taxi_car" required value="car" /> Mr</label>
                    <label> <input type="radio" name="taxi" id="taxi_van" required value="van" /> Mrs </label>
                    <label> <input type="radio" name="taxi" id="taxi_tuk" required value="tuktuk" /> Dr </label>
                    <label> <input type="radio" name="taxi" id="taxi_tuk" required value="tuktuk" /> Prof </label>
                </fieldset>

                <fieldset>
                    <legend>Extras</legend>
                    <label> <input type="checkbox" name="extras" id="extras_baby" value="baby"/> Baby Seat </label>
                    <label> <input type="checkbox" name="extras" id="extras_wheel" value="wheelchair" /> Wheelchair Access </label>
                    <label> <input type="checkbox" name="extras" id="extras_tip" value="tip" /> Stock Tip </label>
                </fieldset>

                <label for="pickup_time">Pickup Date/Time</label>
                <input type="datetime-local" name="pickup_time" id="pickup_time" required />

                <label for="pickup_place">Pickup Place</label>
                <select name="pickup_place" id="pickup_place">
                    <option value="" selected="selected">Select One</option>
                    <option value="office" >Taxi Office</option>
                    <option value="town_hall" >Town Hall</option>
                    <option value="telepathy" >We'll Guess!</option>
                </select>

                <label for="dropoff_place">Dropoff Place</label>
                <input type="text" name="dropoff_place" id="dropoff_place" required list="destinations" />

                <datalist id="destinations">
                    <option value="Airport" />
                    <option value="Beach" />
                    <option value="Fred Flinstone's House" />
                </datalist>

                <label for="comments">Special Instructions</label>
                <textarea name="comments" id="comments" maxlength="500"></textarea>

                <button className="post-btn">ADD</button>

            </form>
            </FormStyled>
            
        </Modal>
        <p></p>
    </>
  )
}

export default PatientForm