import React from "react";
import styled from "styled-components";


const Hr = styled.hr`
    background-color:${({theme})=>theme.mainColor};
    margin:15px auto;
    height:2px;
    border-radius:12px;
    width:100%;
    opacity: 0.6;
`

const PointStyled =styled.div`
    padding:5px;

`
const Mark = styled.span`
    color:${({theme})=>theme.mainColor};
    font-size:25px;
`



const Point =({data})=>{
    

    return(

        <div>
            <Hr/>
            {
                data.map((item,index)=>{
                    
                    return(
                        <div key={index}>
                            <PointStyled><Mark>-</Mark> {item.first}</PointStyled>
                            <PointStyled><Mark>-</Mark> {item.second}</PointStyled>
                            <PointStyled><Mark>-</Mark> {item.third}</PointStyled>
                        </div>
                    )
                })
            }
            <Hr/>
        </div>
    )
}


export default Point