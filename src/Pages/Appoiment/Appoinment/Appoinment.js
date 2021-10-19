import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Appoinment = () => {
    const { serviceId } = useParams();
    const [servicesDetails, setServicesDetails] = useState([]);
    const [singleService, setSingleService] = useState({});
    useEffect(() => {
        fetch('/serviceDetails.json')
            .then(res => res.json())
            .then(data => console.log(data.service))

    }, [])

    useEffect(() => {
        const foundService = servicesDetails.find(service => service.id === serviceId)
        console.log(foundService);
        setSingleService(foundService);

    }, [servicesDetails]);

    return (
        <div>
            <h2>This is appoinment:{serviceId}</h2>
            <h4> Name:{singleService?.name}</h4>
            <h5>Contact:{singleService?.phone}</h5>
            <h5>Email : {singleService?.email}</h5>
            <p>About Details:{singleService?.summary}</p>


        </div>
    );
};

export default Appoinment;