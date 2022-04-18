import React from 'react';
import styled from 'styled-components';


const Money = styled.span`
    font-size:40px;
    color:${({theme})=>theme.mainColor};
    font-weight:700;
`
const MoneyText = styled.span`
    color: #888;
    font-weight:700;

`


const Subscription =({price,per})=>{

    return(
        <>
        <div>
            <Money>{price}</Money>
            <MoneyText>{per}</MoneyText>
        </div>
        </>
    )
}

export default Subscription