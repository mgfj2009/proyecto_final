import React from 'react';
import Message from './Message';
import LinkButton from '../common/LinkButton';

const NotFound = () => (

    <>
    <br></br>
    <br></br>
    <div className="row">
        <div className="col-4"></div>
        <div className="col-4 justify-content-center">
            <div className="row justify-content-center">
                <Message text="404: URL Not Found" />
            </div>
            <div className="row justify-content-center">
                <LinkButton type="danger" to="/" text="Back" />
            </div>
        </div>
        <div className="col-4"></div>
    </div>
    </>

);

export default NotFound;
