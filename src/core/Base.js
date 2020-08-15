import React from "react";
import Menu from "./Menu";


const Base = ({
    title= "My Title",
    description= "My description",
    className="bg-dark text-white p-4",
    children
}) => (
    <div>
        <Menu />
        <div className="container-fluid">
            <div className="jumbotron bg-dark text-white text center mb-0 pb-0">
<h2 className="display-4 text-center">{title}</h2> 
<p className="lead text-center">{description}</p>          
            </div>

<div className={className}>{children}</div>
        
        </div>
        <footer className="footer bg-dark mt-auto py-3">
            <div className="container-fluid bg-success text-white text-center py-3">
                <h4>If you got any questions,feel free to reach out</h4>
                <button className="btn btn-warning btn-lg">Contact us</button>
            </div>
        </footer>
    </div>
)
export default Base;

//sfc