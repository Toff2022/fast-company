import React from "react";
import { useState } from "react";
import TextField from "../textField";

const Login = () => {

const [data, setData] = useState({email:"", password:""})
const handleChange = ({target}) => { //передавали event(e) -> деструк-ли из него target
    setData((prevState) => ({
        ...prevState, 
        [target.name]:target.value
    }))
    }

    return (
        <form action="">
            <TextField 
                label="Электронная почта" 
                name="email" 
                value={data.email} 
                onChange={handleChange}
            />
            <TextField 
                label="Password" 
                type="password" 
                name="password" 
                value={data.password}  
                onChange={handleChange}
            />
        </form>  
    );
};

export default Login;
// value - значение input
// onchange - метод отслеживания value 
// e.target.value - содержит символы вводимые в input