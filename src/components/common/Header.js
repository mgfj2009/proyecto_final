import React from "react";
import { Link } from "react-router-dom";



const Header = () =>{

    return(
    
    <header >
        <div className="row" >
            <div className="col">
            <nav className="navbar navbar-expand  bg-color-1">				 
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">                
                    <ul className="navbar-nav ml-md-auto">
                        <li className="nav-item active">
                             <Link to="/"><i className="fas fa-home font-color-white"></i></Link>
                        </li>
                        <li className="nav-item" style={{paddingLeft:"30px"}}>
                        <Link to="/about"><i className="fas fa-cogs font-color-white"></i></Link>
                        </li>                
                    </ul>
                </div>
            </nav>                   
            </div>
        </div>
        <div className="row header">
            <div className="col-7 header-color title font-color-white">
                <div>
                <h1><span><b>IWF</b></span> International Weather Finder</h1>
                <p className="text-right">Best place to find information about weather</p>
                </div>
            </div>
            <div className="col-5 header-color logo">
                <img src="weather_logo.png" className="" />
            </div>

        </div>
    </header>



    );


}

export default Header;