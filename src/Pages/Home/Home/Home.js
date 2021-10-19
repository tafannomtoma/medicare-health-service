import React from 'react';

import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
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
            <Blog></Blog>


        </div>
    );
};

export default Home;