import React, {useContext}  from "react";
import {MyConfigContext} from "../../contexts/MainContext";
import FormInput from "./FormInput";
import SelectInput from "./SelectInput";
import options from "../../constant/langOptions";
import i18n from "./i18n";



const FormFields = () =>{

    const { lang, setLang, city1, setCity1, city2, setCity2, city3, setCity3 } = useContext(MyConfigContext);

    const handleChange  = (e)=>{
        setLang(e.target.value);
        console.log(lang);
    }   

return (
    <>
        <form role="form">
        <h4>{i18n[lang].select_language}:</h4>
        <br/>                    
        <SelectInput handleChange={handleChange} options={options} lang={lang} />

        <h4>{i18n[lang].favorite_places}:</h4>

        <br/>

        <FormInput city={city1} setCity = {setCity1} lang={lang} />
        <FormInput city={city2} setCity = {setCity2} lang={lang} />
        <FormInput city={city3} setCity = {setCity3} lang={lang} />

        </form>    
    </>
);



};

export default FormFields;