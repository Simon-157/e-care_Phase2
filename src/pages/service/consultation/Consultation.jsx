import { NavSection } from './../../../components/styles/NavSection'
import ConsultationList from './components/ConsultationList';

const Consultation = () => {
  return (
    <>
        
      <NavSection >
          <h2>Consultation</h2>
      </NavSection>
    
        <div className="item-container">
            <ConsultationList />
        </div>
    
    </>
  )
}

export default Consultation