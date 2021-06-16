import React from "react";

import WeatherCard from "./WeatherCard";
import Error from "../common/Error";

import useFetch from "../../custom-hooks/useFetch";
import {getUrl} from "../../constant";
import PropTypes from 'prop-types';
import i18n from "./i18n";

const SearchResults = ({searchText, lang}) => {

    
    const {data:headerCity,loading:loading, status:status} = useFetch(getUrl(encodeURI(searchText),lang));

    return(
        <div className="row justify-content-center padding-top-50 height-350">
            <div className=" col-6">
                {loading ? (<p>{i18n[lang].loading}</p>):(
                      status ? (<WeatherCard weatherData={headerCity} lang={lang} />) : (<Error lang={lang} />)
                      
                )}
            </div>

        </div> 
    );

};

SearchResults.propTypes = {
    searchText: PropTypes.string.isRequired
}

SearchResults.defaultProps = {
    searchText: 'Santiago'
  };



export default SearchResults;