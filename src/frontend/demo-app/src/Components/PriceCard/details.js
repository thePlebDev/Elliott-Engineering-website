import React from 'react';
import styled from 'styled-components';


const DetailText = styled.div`
    text-align: center;
    padding:0 5px;
    font-size: 18px;
`

const Hr = styled.hr`
    background-color:${({theme})=>theme.mainColor};
    margin:15px auto;
    height:2px;
    border-radius:12px;
    width:80%;
    opacity: 0.6;
`

const Details =({details})=>{

    return(
        <>
        <Hr/>
            <DetailText>
                {details}
            </DetailText>
        <Hr/>
        </>
    )
}

export default Details;