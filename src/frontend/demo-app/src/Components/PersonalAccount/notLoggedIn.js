import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ThankYou = styled.div`
    font-size:45px;
    margin:15px 0;
    text-transform:uppercase;
`
const Body = styled.div`
    margin-top:20px;
    padding:10px;
    font-size:20px;
    
`
const Twitter = styled.button`
    font-size:30px;
    background-color:white;
    margin:20px 0;
    border:1px solid #1DA1F2;
    border:${({theme})=>"1px solid "+ theme.mainColor};
    border-radius:4px;
    padding:10px 25px;
    color:${({theme})=>theme.mainColor};
    cursor:pointer;
    transition: all 0.25s;
    &:hover{
        transform:scale(1.1);

    }
`
const ButtonContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-around;

`



const NotLoggedIn = ()=>{

    return(
        <>
        <ThankYou>
            NOT LOGGED IN
        </ThankYou>
        <Body>
            You are not logged in. Please log in to your account or sign up.
        </Body>
        
        <ButtonContainer>
            <Link to="/login">
                <Twitter>Login</Twitter>
            </Link>
            <Link to="/signup">
                <Twitter>Sign up</Twitter>
            </Link>
            
        </ButtonContainer>
        </>
    
    )
}

export default NotLoggedIn