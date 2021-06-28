import React from "react";
import PropTypes from 'prop-types';
import i18n from "./i18n";

const SelectInput = ({handleChange, options, lang}) => {

  return (

    <div className="form-group">                        
                            
        <label>
        {i18n[lang].choose_language}
        </label>

        <select className="form-control" value={ lang } onChange={handleChange}>
                {options.map((option) => (
                <option key={option.value}  value={option.value}>{option.label}</option>
                ))}
        </select>

    </div> 

);

};

SelectInput.propTypes = {
    handleChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
      })
    ).isRequired
}
  



export default SelectInput;