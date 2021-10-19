import React from 'react';
import { FcManager } from 'react-icons/fc';
import './Quality.css';

const Quality = () => {
    return (
        <div className="quality pb-5">
            <div>
                <img className="w-100" src="https://yourhealth.augustahealth.org/wp-content/uploads/sites/21/2020/03/What-does-health-care-mean-to-you.png" alt="" />
            </div>
            <div className="mt-5 p-5">
                <h2>Quality and confidentiality</h2>
                < FcManager size="3em" />
                <p className="mt-3">A handful of analytic frameworks for quality assessment have guided measure development initiatives in the public and private sectors. One of the most influential is the framework put forth by the Institute of Medicine (IOM), which includes the following six aims for the health care system</p>
            </div>
        </div>
    );
};

export default Quality;