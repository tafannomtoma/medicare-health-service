import React from 'react';
import { FcSelfie } from 'react-icons/fc';
import './Blog.css';

const Blog = () => {
    return (
        <div className="pt-5 pb-5">
            <h3>Letest Post</h3>

            < FcSelfie size="3em" />
            <p>Medical News and articles you can trust from around the world. All content is written and reviewed <br /> by qualified health, medical and scientific experts.</p>

            <div className="blog mx-5">
                <div className="mx-3">

                    <img className="w-100" src="https://www.demo.unitemplates.com/medico/images/blogs/gynecology/gyneco_01.jpg" alt="" />
                    <h5>Confidential and private</h5>
                    <p>Super User / Gynecology /20 july, 2021
                    </p>
                    <p>Seamlessly embrace client-based solutions rather than fully researched imperatives. Quickly...</p>
                    <h6>Read More</h6>
                </div>
                <div className="mx-3">

                    <img className="w-100" src="https://www.demo.unitemplates.com/medico/images/blogs/gynecology/gyneco_02.jpg" alt="" />
                    <h5>Confidential and private</h5>
                    <p>Super User / Gynecology /20 july, 2021
                    </p>
                    <p>Seamlessly embrace client-based solutions rather than fully researched imperatives. Quickly...</p>
                    <h6>Read More</h6>
                </div>
                <div className="mx-3">

                    <img className="w-100" src="https://www.demo.unitemplates.com/medico/images/blogs/gynecology/gyneco_03.jpg" alt="" />
                    <h5>Confidential and private</h5>
                    <p>Super User / Gynecology /20 july, 2021
                    </p>
                    <p>Seamlessly embrace client-based solutions rather than fully researched imperatives. Quickly...</p>
                    <h6>Read More</h6>
                </div>
            </div>

        </div>
    );
};

export default Blog;