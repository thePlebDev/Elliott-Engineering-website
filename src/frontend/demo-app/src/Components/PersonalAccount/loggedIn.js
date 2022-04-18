import React from 'react'
import styled from "styled-components"



const Username = styled.div`
    font-size:30px;
    margin-top:15px;

`
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
    border-radius:4px;
    padding:10px 25px;
    color:#1DA1F2;
    cursor:pointer;
    transition: all 0.25s;
    &:hover{
        transform:scale(1.1);

    }
`




const LoggedIn = ()=>{
    return(
        <>
                <ThankYou>
                    Thank you 
                </ThankYou>
                <Body>
                    Thank you for your support and vote of confidence. 
                    We will continue to work hard and produce the best software we can.
                    If you have any questions comments or concerns, please contact our community relations associate
                    on twitter
                </Body>
                
                <Twitter>
                    <a style={{color:"#1DA1F2"}} href="https://twitter.com/PlebDevTristan" target="_blank" rel="noopener noreferrer">Twitter</a>
                </Twitter>
        </>

    )

}

export default LoggedIn;