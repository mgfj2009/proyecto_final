
import React, { createContext, useState } from "react";

export const MyConfigContext = createContext();

const MyConfigContextProvider = ({ children }) => {   

    const [lang, setLang] = useState("es");
    const [city1, setCity1] = useState("Santiago, Chile");
    const [city2, setCity2] = useState("Lima, Peru");
    const [city3, setCity3] = useState("Barranquilla, Colombia");

    return (
        <MyConfigContext.Provider value={{ lang, setLang, city1, setCity1, city2, setCity2, city3, setCity3 }}>
          {children}
        </MyConfigContext.Provider>
      );


 }
export default MyConfigContextProvider;
