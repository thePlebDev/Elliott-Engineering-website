import React,{useState} from "react";

import FormContainer from "../Forms/formContainer";
import Form from "../Forms";


const InputForm =({setShow,inputState,setState})=>{
    
    
    const handleSubmit =(e)=>{
        e.preventDefault()
        setShow(false)
    }

    const handleChange =(e)=>{
        const {name,value} = e.target; 
        setState({...inputState,[name]:value})  
    }


    return(
        <FormContainer>
            <Form handleSubmit={handleSubmit}> 

            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" onChange={(e)=>handleChange(e)} value={inputState.username}/>

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" onChange={(e)=>handleChange(e)} value={inputState.email}></input>

            <label htmlFor="password">password:</label>
            <input type="password" id="password" name="password" onChange={(e)=>handleChange(e)} value={inputState.password}></input>

            <button type="submit">Register</button>
            
            </Form>
            
        </FormContainer>

    )
}


export default InputForm