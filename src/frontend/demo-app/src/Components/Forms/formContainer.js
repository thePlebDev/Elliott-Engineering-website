import React from "react";
import styled from 'styled-components'

const Container = styled.div`
    max-width:500px;
    margin:0 auto;
    font-weight: 400;
    padding-top:20px;
    border-radius:12px;


    @media only screen and (min-width: 800px) {
        box-shadow: 0 2px 4px rgb(0 0 0 / 7%), 0 4px 5px rgb(0 0 0 / 6%), 0 1px 10px rgb(0 0 0 / 10%);
      }

`
const SubContainer = styled.div`
    width:80%;
    margin: 0 auto;
`



const FormContainer = ({children})=>{


    return(
        <Container>
            <SubContainer>
                {
                    children
                }
            </SubContainer>
        </Container>
    )
}


export default FormContainer