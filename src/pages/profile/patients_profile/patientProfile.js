import React from 'react'
import patientProfileStyles from './patients-profile.module.scss'

function PatientProfile() {
  return (
    <div className={patientProfileStyles.wrapper}>
        <div className={patientProfileStyles.left}>
            <img src="https://i.imgur.com/cMy8V5j.png" 
            alt="user" width="100" />
            <h4>Alex William</h4>
            <p>UI Developer</p>
        </div>
        <div className={patientProfileStyles.right}>
            <div className={patientProfileStyles.info}>
                <h3>Information</h3>
                <div className={patientProfileStyles.info_data}>
                    <div className={patientProfileStyles.data}>
                        <h4>Email</h4>
                        <p>alex@gmail.com</p>
                    </div>
                    <div className={patientProfileStyles.data}>
                    <h4>Phone</h4>
                        <p>0001-213-998761</p>
                </div>
                </div>
            </div>
        
        <div classame={patientProfileStyles.projects}>
                <h3>Projects</h3>
                <div className={patientProfileStyles.projects_data}>
                    <div className={patientProfileStyles.data}>
                        <h4>Recent</h4>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className={patientProfileStyles.data}>
                    <h4>Most Viewed</h4>
                        <p>dolor sit amet.</p>
                </div>
                </div>
            </div>
        
            <div className={patientProfileStyles.social_media}>
                <ul>
                <li><a href="/"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="/"><i class="fab fa-twitter"></i></a></li>
                <li><a href="/"><i class="fab fa-instagram"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}
export default PatientProfile