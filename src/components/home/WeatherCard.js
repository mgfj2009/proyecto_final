import React from "react";
import i18n from "./i18n";

const WeatherCard = ({weatherData, lang}) =>{

    return(

    <div className="card"> <span className="icon"><img className="img-fluid" src={weatherData.icon} /></span>
        <div className="title">
            <p className="font-color-blue">{weatherData.name}</p>
        </div>
        <div className="temp font-color-blue">{weatherData.tempeature}<sup>&deg;</sup></div>
        <div className="row">
            <div className="col-6">
                <div className="header font-color-blue">{i18n[lang].card_general}</div>
                <div className="value font-color-blue">{weatherData.condition}</div>
            </div>
            <div className="col-6">
                <div className="header font-color-blue">{i18n[lang].card_humidity}</div>
                <div className="value font-color-blue">{weatherData.humidity}%</div>
            </div>
        </div>
    </div>

    );



}

export default WeatherCard;