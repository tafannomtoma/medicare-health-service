import React, { memo } from 'react';
import './Insurance.css'

const Insurance = memo(() => {
    return (
        <div className="insurance-container pt-5 pb-5 mt-5 mb-5">
            <div className="pt-5  mx-5">
                <h2>Our Insurance</h2>
                <p>Allowing Kentuckians to get insurance through the state site instead of the federal exchange is expected to save individuals about $15 million, the governor’s statement said. That’s due to a surcharge that’s added on plans purchased through the federal exchange.</p>

                <div className="inline-block">
                    <button className="mx-3 btn btn-dark">Subscribe Plans</button>
                    <button className="btn btn-light">About Us</button>
                </div>


            </div>
            <div>
                <img className="w-100" src="https://www.demo.unitemplates.com/medico/images/gynecology/image_002.jpg" alt="" />
            </div>
        </div>
    );
});

export default Insurance;
