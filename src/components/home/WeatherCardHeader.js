import React, {useContext} from "react";
import WeatherCard from "./WeatherCard";
import Error from "../common/Error";

import useFetch from "../../custom-hooks/useFetch";
import {MyConfigContext} from "../../contexts/MainContext";
import MyErrorBoundary from "../common/MyErrorBoundary";
import {getUrl} from "../../constant";
import i18n from "./i18n";

const WeatherCardHeader = () => {

    const { lang, city1, city2, city3 } = useContext(MyConfigContext);
    const {data:headerCity1,loading:loading1,status:status1} = useFetch(getUrl(encodeURI(city1),lang));
    const {data:headerCity2,loading:loading2,status:status2} = useFetch(getUrl(encodeURI(city2),lang));
    const {data:headerCity3,loading:loading3,status:status3} = useFetch(getUrl(encodeURI(city3),lang));


    return(

        <>
            
            <div className="row" >
                <div className="col-3" />
                <div className="col">
                    <h2 className="subtitle padding-top-50">{i18n[lang].favorite_cities}:</h2>
                </div>
                
            </div>
            <div className="row justify-content-center padding-top-50 height-350">
            
                <div className=" col-3">                  
                    {loading1 ? (<p>{i18n[lang].loading}</p>):(
                        status1 ? ( <MyErrorBoundary> <WeatherCard weatherData={headerCity1} lang={lang} /> </MyErrorBoundary>) : (<Error lang={lang} />)
                    )}
                </div>

                <div className=" col-3">
                    {loading2 ? (<p>{i18n[lang].loading}</p>):(
                        status2 ? (<MyErrorBoundary> <WeatherCard weatherData={headerCity2} lang={lang} /> </MyErrorBoundary>) : (<Error />)
                    )}
                </div>

                <div className=" col-3">
                {loading3 ? (<p>{i18n[lang].loading}</p>):(
                    status3 ? (<MyErrorBoundary> <WeatherCard weatherData={headerCity3} lang={lang} /></MyErrorBoundary>) : (<Error />)
                )}
                </div>
            </div>        

        </>

    );

}

export default WeatherCardHeader;