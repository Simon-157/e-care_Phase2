
import React, {useContext} from 'react'
import Modal from 'react-modal'
import { formContext } from '../../../../contexts/FormContext'
import 'animate.css'
import { FormStyled } from '../../../../components/styles/Form.Styled'
import { FlexStyled } from '../../../../components/styles/FlexStyled'
// import { ActionButtonStyled } from './styles/ActionButton'

const ExaminationForm = () => {

  const {examinationFormIsOpen, setExaminationFormIsOpen, activePatient} = useContext(formContext)
  // const [title, setTitle] = useState('')
  // const [subContent, setSubContent] = useState('')

  const handleModal = () => {
    setExaminationFormIsOpen(false)
  }
  
  return (
    <>
        
        <Modal
        className='animate__animated animate__fadeInUp animate__faster'
        isOpen={examinationFormIsOpen}
        style={{
            
            overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(18, 18, 0, 0.8)',
                zIndex: 10000
              },
              content: {
                margin: "auto",
                maxWidth: "70vw",
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
               <div className="form-header"><h2>{activePatient.name} {activePatient.LastName}</h2></div>
           <button onClick={handleModal} className='close-btn'>&times;</button>
            
           <form className="myForm">
                <FlexStyled> 
                    <div className="flex-container" >
                            <div className="flex-items">
                            
                                <p><b>{activePatient.name}'s</b> Narrated Complaints</p>
                                <textarea type="text" className="" />
                                
                                <br/><br/>
                                <div >
                                    <p>History of <b>{activePatient.name}'s</b> Observations/Physical</p>
                                    <textarea type="text" className="" />
                                </div>
                                <h3>Do you want to prescribe a diagnosis<input type="checkbox" className="" /></h3>
                            </div>
                        
                            <div className="flex-items">
                                <h3>Choose Recommended Tests</h3>
                                <p><input type="checkbox" className="" />Random Brown Sugar Test</p><br />
                                <p><input type="checkbox" className="" />Random Brown Sugar Test</p><br />
                                <p><input type="checkbox" className="" />Random Brown Sugar Test</p><br />
                                <p><input type="checkbox" className="" />Random Brown Sugar Test</p><br />
                                <p><input type="checkbox" className="" />Random Brown Sugar Test</p><br />
                                <p><input type="checkbox" className="" />Random Brown Sugar Test</p><br />
                                <p><input type="checkbox" className="" />Random Brown Sugar Test</p><br />
                                <p><input type="checkbox" className="" />Random Brown Sugar Test</p><br />
                                <p><input type="checkbox" className="" />Random Brown Sugar Test</p><br /><br />

                            </div>
                        </div>
                        <br/><br/><br/><br />
                        <button className="post-btn">Submit</button>
                </FlexStyled>

            </form>
            
            </FormStyled>
            
        </Modal>
        
    </>
  )
}

export default ExaminationForm