import React from 'react';
import styled from 'styled-components';


const Image = styled.img`
    
    border:${({theme})=>"1px solid " + theme.mainColor};
    border-radius:12px;
    width:80%;
    height:120px;
    margin:5px auto;

`
const Title = styled.div`
    color: #888;
    font-size:25px;
    font-weight: 600;
    letter-spacing: 1px;

`


const TitleImage = ({image,title})=>{
    return(
        <>
        <Image src={image}/>
        <Title>{title}</Title>
        
        </>
    )
}


export default TitleImage