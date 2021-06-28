
import React, { Suspense, lazy } from "react";
import { BrowserRouter,Switch, Route } from "react-router-dom";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

import Home from "./components/home";
import NotFound from "./components/NotFound";



import "./assets/css/styles.css";
import MyConfigContextProvider from "./contexts/MainContext";

const ConfigPage = lazy(() => import("./components/configPage"));


const App = () =>{

  return (
    <BrowserRouter>  
    <div className="container-fluid">
        <MyConfigContextProvider>  
        <Header />
        <Switch>                 
          
          <Route exact path="/" >
              <Home/>
          </Route>

          <Route exact path="/config" >
            <Suspense fallback={<div>Loading...</div>} >
              <ConfigPage />
            </Suspense>
          </Route>


          <Route path="" component={NotFound} />
          
        </Switch>
        <Footer />
        </MyConfigContextProvider>
    </div>
    </BrowserRouter>    
  );



}
export default App;
