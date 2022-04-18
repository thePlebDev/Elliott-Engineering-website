import React from "react";
import styled from "styled-components"

const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
box-shadow: 0 1px 3px rgb(0 0 0 / 10%), 0 2px 2px rgb(0 0 0 / 6%), 0 0 2px rgb(0 0 0 / 7%);
border-radius:12px;
width:250px;
margin:20px 5px;
flex-direction:column;

`


const CardContainer = ({children})=>{
    return(
        <Container>
            {children}
        </Container>
    )
}

export default CardContainer