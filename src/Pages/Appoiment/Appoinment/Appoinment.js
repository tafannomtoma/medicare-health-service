import React from 'react';
import { useParams } from 'react-router';

const Appoinment = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>This is appoinment:{serviceId}</h2>
        </div>
    );
};

export default Appoinment;