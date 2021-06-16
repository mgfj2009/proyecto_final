
import React, { Suspense, lazy } from "react";
import { BrowserRouter,Switch, Route } from "react-router-dom";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

import Home from "./components/home";
import NotFound from "./components/NotFound";



import "./assets/css/styles.css";
import MyConfigContextProvider, { MyConfigContext } from "./contexts/MainContext";

const About = lazy(() => import("./components/about"));


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
          <Suspense fallback={<div>Loading...</div>} >
            <Route path="/about" component={About} />
          </Suspense>
          <Route component={NotFound} />
        </Switch>
        <Footer />
        </MyConfigContextProvider>
    </div>
    </BrowserRouter>    
  );



}
export default App;
