import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./components/landingComponents/NavBar";
const NotFound=()=>{
    useEffect(()=>{
        //navigate('/login');

},[])
    return(<>
        <NavBar/>
        <div className="row">
            <div className="col-sm-3">
                <div className="col-sm-7">
                    <img 
                src="not.jpg" 
                style={{height:'400', width:"100%"}}
                alt="" />
                </div>
            </div>
        </div>
</>)
}
export default NotFound