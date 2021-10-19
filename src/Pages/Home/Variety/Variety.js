import React from 'react';
import { FcBiotech, FcDeployment, FcDisplay, FcLikePlaceholder } from 'react-icons/fc';
import './Variety.css';

const Variety = () => {
    return (
        <div className="variety-container">
            <div className="variety">
                <FcBiotech size="4em" color="white" />
                <h5>Trusted Gynecologists</h5>
                <p>Medical terminology is used to precisely describe the human body components, processes, illnesses, medical procedures, and pharmacology. Medical terms are used in the field of medicine, and clinical settings</p>
            </div>
            <div className="variety">
                <FcDeployment size="4em" color="white" />
                <h5>Oncology Laboratory</h5>
                <p>Medical terminology is used to precisely describe the human body components, processes, illnesses, medical procedures, and pharmacology. Medical terms are used in the field of medicine, and clinical settings</p>
            </div>
            <div className="variety">
                <FcDisplay size="4em" color="white" />
                <h5>Excellent Diagnosis</h5>
                <p>Medical terminology is used to precisely describe the human body components, processes, illnesses, medical procedures, and pharmacology. Medical terms are used in the field of medicine, and clinical settings</p>
            </div>
            <div >
                <FcLikePlaceholder size="4em" color="white" />
                <h5>Disease Prevention</h5>
                <p>Medical terminology is used to precisely describe the human body components, processes, illnesses, medical procedures, and pharmacology. Medical terms are used in the field of medicine, and clinical settings</p>
            </div>
        </div>
    );
};

export default Variety;