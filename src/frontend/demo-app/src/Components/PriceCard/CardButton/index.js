import React from 'react';
import styled from 'styled-components';

const SignUpButton = styled.div`
    
    padding:12px 20px;
    margin:10px auto;
    border-radius:12px;
    font-weight:700;
    letter-spacing:1px;
    cursor:pointer;
    cursor:${({status})=>status ? "pointer" : "auto"};
    transition: all .25s;
    background-color:${({theme})=>theme.mainColor};
    color:white;
    font-size:20px;

    &:hover{
        transform:${({status})=>status ? "scale(1.1)" : ""};
    }
    

`

const CardButton =({status,buttonText})=>{
    return(
        <SignUpButton status={status}>{buttonText}</SignUpButton>

    )
}

export default CardButton