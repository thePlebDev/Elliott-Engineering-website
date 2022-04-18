import React from "react";
import styled,{keyframes} from "styled-components"

const show = keyframes`
    from{
        opacity:0;
        transform: translate(0px, 7px) skew(10deg);
        
    }
    to{
        opacity: 1;
        
    }
`

const Container = styled.div`
    max-width:500px;
    font-size: 1.4rem;
    font-weight: 700;
    text-align:center;
    margin:2rem auto;
    box-shadow: 0 2px 4px rgb(0 0 0 / 7%), 0 4px 5px rgb(0 0 0 / 6%), 0 1px 10px rgb(0 0 0 / 10%);
    border:1px solid green;
    color:green;
    padding:12px 4px;
    border-radius:12px;
    animation: ${show} .25s linear;
    @media only screen and (min-width: 800px) {
        font-size: 1.8rem;
    } 
`



const Success =({message})=>{
    return(
    <Container>
        {message}
    </Container>
    )
}

export default Success