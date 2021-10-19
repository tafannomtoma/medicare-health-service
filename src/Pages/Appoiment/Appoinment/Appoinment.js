import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Appoinment.css'

const Appoinment = () => {
    const { serviceId } = useParams();
    const [servicesDetails, setServicesDetails] = useState([]);
    const [singleService, setSingleService] = useState({});
    useEffect(() => {
        fetch('/serviceDetails.json')
            .then(res => res.json())
            .then(data => setServicesDetails(data.service))

    }, [])

    useEffect(() => {
        const foundService = servicesDetails.find(service => service.id == serviceId)
        setSingleService(foundService);

    }, [servicesDetails]);






    return (
        <div className="appoinment-container">
            <h2>This is appoinment:{serviceId}</h2>
            <h4> Name:{singleService?.name}</h4>
            <h5>Contact:{singleService?.phone}</h5>
            <h5>Email : {singleService?.email}</h5>
            <p>About Details:{singleService?.summary}</p>


        </div>
    );
};

export default Appoinment;