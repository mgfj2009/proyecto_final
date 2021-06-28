import React from "react";
import PropTypes from 'prop-types';
import i18n from "./i18n";

const FormInput = ({city, setCity, lang}) => {


    const onChangeHandler = (e) =>{
        setCity(e.target.value);
    }

    return (

            <div className="form-group">                                
                <label>
                {i18n[lang].city_place}
                </label>
                <input type="text" className="form-control" value={city} onChange={ onChangeHandler } />
            </div>

    );

}

FormInput.propTypes = {
    setCity: PropTypes.func.isRequired,
    city: PropTypes.string.isRequired
  }
  


export default FormInput;