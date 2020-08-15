import React, {useState} from "react";
import Base from "../core/Base";
import {Link} from "react-router-dom";
import { signup } from "../auth/helper"

const Signup = () => {
    // values take info , setValue put it into place
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        error: "",
        success: false
    });

    const {name, email, password, error, success} = values;

    //Higher order function . Please watch the video
    const handleChange = name => event => {
        setValues({...values, error: false, [name]: event.target.value})
    }

    const onSubmit = event => {
        event.preventDefault()//prevent dfault action , so we use our action
        setValues({...values, error: false})
        signup({name, email, password})
        .then(data => {
            if(data.error){
                setValues({...values, error: data.error, success: false})
            } else {
                setValues({
                    ...values, 
                    name: "",
                    email: "",
                    password: "",
                    error: "",
                    success: true
                })
            }
        })
        .catch(console.log("Error in Signup"));
        
    };

    const signUpForm = () => {
       return (
       <div className="row">
            <div className="col-md-4 offset-sm-4 text-left">
                <form>
                    <div className="form-group">
                        <label  className="text-light">Name</label>
                        <input onChange={handleChange("name")} type="text" className="form-control"
                        value={name}/>
                    </div>

                    <div className="form-group">
                        <label  className="text-light">Email</label>
                        <input onChange={handleChange("email")} type="email" className="form-control"
                        value={email}/>
                    </div>

                    <div className="form-group">
                        <label  className="text-light">password</label>
                        <input onChange={handleChange("password")} type="password" className="form-control"
                        value={password}/>
                    </div>

                    <button onClick={onSubmit} className="btn btn-success btn-block">Submit</button>
                        {/* Dont use parantheses within Onclick */}
                </form>
            </div>
        </div>
        )
    }

    const successMessage = () => {
        return (
            <div className="row">
            <div className="col-md-4 offset-sm-4 text-left">
        <div className="alert alert-success" 
        style={{display: success ? "" : "none"}}>
            New account was Created Succesfully . Please <Link to="/signin">Login Here</Link>
        </div>
        </div>
        </div>
        )
    };
    
    const errorMessage = () => {
        return (
            <div className="row">
            <div className="col-md-4 offset-sm-4 text-left">
            <div className="alert alert-danger" 
        style={{display: error ? "" : "none"}}>
            {error}
        </div>
        </div>
        </div>
        )
    }

    return (
        <Base title="Signup Page" description="A page for User Signup!">
        {successMessage()}
        {errorMessage()}
        {signUpForm()}
    <p className="text-white text-center">{JSON.stringify(values)}</p>
        </Base>
    )
}

export default Signup;