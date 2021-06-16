import React from "react";

const Error = ({lang}) => {

    const i18n = {

        'en': {
            'city_not_found': 'City not found!',
            'try': 'Please try:  city, country',
            'example': '(ex: Santiago, Chile)'            
          },
    
        'es': {
            'city_not_found': 'Cuidad no encontrada!',
            'try': 'Por favor intente:  cuidad, pais',
            'example': '(ej: Santiago, Chile)'         
          }     
    
    };


    return (

        <div className="card"> 
            <div className="title">
                <p className="font-color-blue">Ooops!</p>
            </div>
            <br></br>
            <br></br>
            <div className="temp font-color-blue">{i18n[lang].city_not_found}</div>
            <div className="row">
                <div className="col">
                    <br></br>
                    <div className="value font-color-blue">{i18n[lang].try}</div>
                    <div className="header font-color-blue"><b>{i18n[lang].example}</b></div>
                </div>
            </div>
        </div>


    );

}

export default Error;