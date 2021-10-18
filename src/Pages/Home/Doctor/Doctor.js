import React from 'react';
import './Doctor.css';

const Doctor = ({ doctor }) => {
    const { name, specialist, img } = doctor;
    return (
        <div className="col-lg-4 col-sm-6 col-12 doctor">

            <img className="doctor-img" src={img} alt="" />
            <h3 className="name-colour">{name}</h3>
            <h5>{specialist}</h5>
        </div>
    );
};

export default Doctor;