import React from 'react';
import Blogs from '../../Blogs/Blogs';

import Banner from '../Banner/Banner';

import Doctors from '../Doctors/Doctors';
import Insurance from '../Insurance/Insurance';
import Quality from '../Quality/Quality';
import Services from '../Services/Services';
import Variety from '../Variety/Variety';

const Home = () => {
    return (
        <div id="home">

            <Banner></Banner>
            <Variety></Variety>
            <Quality></Quality>
            <Services></Services>
            <Insurance></Insurance>
            <Doctors></Doctors>
            <Blogs></Blogs>


        </div>
    );
};

export default Home;