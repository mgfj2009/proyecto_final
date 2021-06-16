import React, { useState, useContext } from "react";
import {MyConfigContext} from "../../contexts/MainContext";
import SearchResults from "./SearchResults";
import MyErrorBoundary from "../common/MyErrorBoundary";
import i18n from "./i18n";

const SearchCity = () => {

    const { lang } = useContext(MyConfigContext);
    const [inputText, setInputText] = useState("");
    const [searchWeather, setSearchWeather] = useState(false);

    function handleSubmit(){
        console.log(inputText);
        setSearchWeather(true);

    }

    function handleKeyPress(e){
        if (e.key === 'Enter') {
            handleSubmit();
          }


    }

    return(

        <div className="row padding-top-50">
            <div className=" col-2">

            </div>
            <div className=" col-8">

                <div className="card-body row no-gutters align-items-center">
                    <div className="col-auto">
                        <i className="fas fa-search h4 text-body"></i>
                    </div>
                    <div className="col">
                        <input  value={inputText} 
                                onKeyPress={ handleKeyPress } 
                                onChange={ (e) =>{ setSearchWeather(false); setInputText(e.target.value);}} 
                                className="form-control form-control-lg form-control-borderless" 
                                type="search" 
                                placeholder={i18n[lang].place_holder} 
                                />
                    </div>

                    <div className="col-auto">
                        <button className="btn btn-lg btn-primary" type="submit" onClick={ handleSubmit }> {i18n[lang].search_button}</button>
                    </div>
                </div>
                <br />

                { searchWeather && <MyErrorBoundary> <SearchResults searchText={ inputText } lang={ lang } /> </MyErrorBoundary> }

            </div>
            <div className="col-2"></div>

        </div>


    );


}

export default SearchCity;