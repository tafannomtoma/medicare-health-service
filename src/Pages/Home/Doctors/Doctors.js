import React from 'react';

import Doctor from '../Doctor/Doctor';


const doctors = [
    {
        id: 1,
        img: "https://www.demo.unitemplates.com/medico/images/gynecology/doctor_001.jpg",
        name: "Vanessa Carvajal",
        specialist: "Gynecologist & Founder"
    },
    {
        id: 2,
        img: "https://www.demo.unitemplates.com/medico/images/gynecology/doctor_002.jpg",
        name: "Alexanser Perez",
        specialist: "Surgeon"
    },
    {
        id: 3,
        img: "https://www.demo.unitemplates.com/medico/images/gynecology/doctor_003.jpg",
        name: "Delfina Villareal",
        specialist: "Fertilization"
    },
    {
        id: 4,
        img: "https://www.demo.unitemplates.com/medico/images/gynecology/doctor_004.jpg",
        name: "Javier Arias",
        specialist: "Gynecologist"
    },
    {
        id: 5,
        img: "https://www.demo.unitemplates.com/medico/images/gynecology/doctor_005.jpg",
        name: "Janna Gimenez",
        specialist: "Laboratory"
    },
    {
        id: 6,
        img: "https://www.demo.unitemplates.com/medico/images/gynecology/doctor_006.jpg",
        name: "Jorge Gavidia",
        specialist: "Insemination"
    }
]

const Doctors = () => {
    const doctor = doctors.slice(0, 3);
    return (
        <div id="doctors" className="container">
            <h2>Our doctors</h2>
            <div className="row">
                {
                    doctor.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>)
                }

            </div>



        </div>
    );
};

export default Doctors;