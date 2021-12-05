import React from 'react';
import {Spinner} from 'react-bootstrap';

const Footer = () => {
    return(
        <div className="footer container row mt-3 mb-3 row d-flex justify-content-center">
            <h3 style={{fontSize:"4vw"}}> Stay tuned for more to come..</h3>
            <div className="row d-flex justify-content-center">
                <Spinner style={{animationDelay:"-0.5s"}} animation="grow" variant="primary" />
                <Spinner style={{animationDelay:"-0.4s"}} animation="grow" variant="secondary" />
                <Spinner style={{animationDelay:"-0.3s"}} animation="grow" variant="success" />
                <Spinner style={{animationDelay:"-0.2s"}} animation="grow" variant="danger" />
                <Spinner style={{animationDelay:"-0.1s"}} animation="grow" variant="warning" />
                <Spinner style={{animationDelay:"-0.0s"}} animation="grow" variant="info" />
                <Spinner style={{animationDelay:"0.1s"}} animation="grow" variant="light" />
                <Spinner style={{animationDelay:"0.2s"}} animation="grow" variant="dark" />
            </div>
        </div>
    );
}

export default Footer;