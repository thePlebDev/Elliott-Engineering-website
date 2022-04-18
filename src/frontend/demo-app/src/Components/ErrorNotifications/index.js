import React from "react"
import styled from "styled-components";

import Warning from "../../Resources/warning";
 

const ErrorMessage = styled.div`
box-shadow: rgb(0 0 0 / 20%) 0px 3px 5px -1px, 
rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px;
    margin:5px;
    border-radius:8px;
    padding:5px;
    background-color:rgb(211, 47, 47);
    color:white;
    font-size:20px;
    text-align:center;
    letter-spacing:1px;
    font-weight:700;
    display:flex;
    align-items:center;
    justify-content:space-between;


`

let meat = "IT DOES SOUND LIKE A WONDERFUL IDEA AND YOU DO SEEM LIKE A WONDERFUL FELLOW"

const ErrorNotifications =({errors})=>{
    const values = Object.values(errors);
    
        return(
            <>
            {
                values.map((item,index)=>{
                    return(
                        <ErrorMessage key={index}>
                            <Warning/>
                             {item}
                            <Warning/>
                        </ErrorMessage>
                        
                    )
                })
            }
            </>
        )

 
}

export default ErrorNotifications