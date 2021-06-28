import React from "react";
import FormFields from "./Formfields";
import MyErrorBoundary from "../common/MyErrorBoundary";

const ConfigPage = () =>{

    return(
        <>
            <br /><br />
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="card bg-light">
                        <MyErrorBoundary>
                            <FormFields />
                        </MyErrorBoundary>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConfigPage;