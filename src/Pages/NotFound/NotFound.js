import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <img className="p-5" src="https://media.istockphoto.com/vectors/young-girl-unplugged-electric-plug-and-socket-from-the-network-of-vector-id1173591229?b=1&k=20&m=1173591229&s=170667a&w=0&h=FMb3h6eaFYzzQ5H3NLCOS2kfDq7RoXwQnCTpGwDokVc=" alt="" />
            <Link to="/"><button className="notfound-btn">Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;