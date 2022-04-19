import React from "react";
import styled from "styled-components"

const FormContainer = styled.form`
    display:flex;
    flex-direction:column;  
    

`

 


const Form = ({handleSubmit,children})=>{
    return(
        <FormContainer onSubmit={(e)=> handleSubmit(e)}>
            {children}
        </FormContainer>

    )

}

export default Form