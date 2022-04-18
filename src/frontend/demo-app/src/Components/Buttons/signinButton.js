import React,{useState} from "react";
import styled from 'styled-components';


const SignInButtonContainer = styled.button`
    outline:none;
    background: #00a862;
    border-radius: 500px;
    box-shadow: 0 0 6px rgb(0 0 0 / 24%), 0 8px 12px rgb(0 0 0 / 14%);
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.2;
    overflow: hidden;
    border:none;
    padding: 10px 5px;
    margin-top:30px;
    margin-bottom:30px;
    margin-left:55%;
    width:100px;
    @media only screen and (min-width: 800px) {
        margin-left:75%;
      }
      cursor:pointer;
`


const SignInButton =({text})=>{
    return(
        <SignInButtonContainer type="save">{text}</SignInButtonContainer>
    )


}


export default SignInButton