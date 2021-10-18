import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, img, summary, fees, name } = service;
    return (
        <div className="service">

            <img className="service-img" src={img} alt="" />
            <div className="service-card">
                <h2>{name}</h2>
                <h5>Fees:{fees}</h5>
                <p>{summary}</p>
                <Link to={`/appoinment/${id}`}>
                    <button className="sevice-appoinment">Appoinment</button>
                </Link>
            </div>

        </div>
    );
};

export default Service;