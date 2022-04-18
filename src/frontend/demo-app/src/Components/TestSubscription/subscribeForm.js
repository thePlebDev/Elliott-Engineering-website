import React,{useState} from "react";

import FormContainer from "../Forms/formContainer";
import Form from "../Forms";




const SubscribeForm =({userDetails})=>{
    
    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(userDetails)

    }


    return(
        <FormContainer>
            <Form handleSubmit={handleSubmit}>

            <button>Subscribe 5$/month</button>
            </Form>
        </FormContainer>
    )
}

export default SubscribeForm