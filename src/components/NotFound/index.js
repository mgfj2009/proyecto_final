import React from 'react';
import Message from './Message';
import LinkButton from '../common/LinkButton';

const NotFound = () => (

    <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 justify-content-center" style={{paddingTop :"200px"}} >
            <div className="row justify-content-center">
                <Message text="404: URL Not Found" />
            </div>
            <div className="row justify-content-center">
                <LinkButton type="danger" to="/" text="Back" />
            </div>
        </div>
        <div className="col-md-4"></div>
    </div>

);

export default NotFound;
