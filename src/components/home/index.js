import React from "react";
import WeatherCardHeader from "./WeatherCardHeader";
import SearchCity from "./SearchCity";

const Home = () =>{

    return(
        <>
        <section>
            <WeatherCardHeader />            
        </section>    
        <section>
            <SearchCity />
        </section>
        </>

    );


}

export default Home;