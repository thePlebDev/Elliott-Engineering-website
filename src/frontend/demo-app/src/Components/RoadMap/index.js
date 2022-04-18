import React from "react";
import styled from 'styled-components'

import CardContainer from "../Cards/cardContainer";
import roadMapInfo from "../../Utils/Constants/roadMapInfo";
import PriceCard from "../PriceCard";
import TitleImage from "../PriceCard/titleImage";
import Subscription from "../PriceCard/subscription";
import CardButton from "../PriceCard/CardButton";
import Details from "../PriceCard/details";
import Point from "../PriceCard/points";

const SuperContainer = styled.div`
    border-radius:8px;
    width:80%;
    margin:50px auto;
    display:flex;
    flex-direction:column;
    

`
const TitleText = styled.div`
    
    font-weight: 700;
    text-align:center;
    margin:2rem auto;
    font-size:30px;
    letter-spacing:1px;

`
const DetailsText = styled.div`
    text-align:center;  
    font-size:25px;
    width:80%;
    margin:0 auto;
`
const Display = styled.span`
    display:none;
    @media only screen and (min-width: 700px) {
        display:block;
      }
`
const Container = styled.div`
    padding:10px;
    display:grid;
    justify-items:center;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));

`



const RoadMap =()=>{
    return(
        <SuperContainer>
            <TitleText>Road Map</TitleText>
            <DetailsText>
            <Display>
                Our team has  planned out a road map so we can be transparent with ourselves and the 
                communities we serve. We are currently in phase 1
            </Display>
            </DetailsText>
            <Container>
            {
                    roadMapInfo.map((item)=>{
                        return(
                            <PriceCard>
                                <TitleImage  title={item.title} image={item.image}/>
                                
                                <Point data={item.phase}/>
                                <CardButton status={item.status} buttonText={item.buttonText}/>
                            </PriceCard>
                        )
                    })
                }
            </Container>
        </SuperContainer>
    )
}



export default RoadMap