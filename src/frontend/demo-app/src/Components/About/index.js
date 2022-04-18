import React from "react";
import styled from "styled-components";

import PriceCard from "../PriceCard";
import aboutPageInfo from "../../Utils/Constants/aboutPageInfo";
import TitleImage from "../PriceCard/titleImage";
import Subscription from "../PriceCard/subscription";
import CardButton from "../PriceCard/CardButton";
import Details from "../PriceCard/details";

//box-shadow: 0 1px 3px rgb(0 0 0 / 10%), 0 2px 2px rgb(0 0 0 / 6%), 0 0 2px rgb(0 0 0 / 7%);
const SuperContainer = styled.div`
    border-radius:8px;
    width:80%;
    margin:50px auto;
    display:flex;
    flex-direction:column;
    

`


const Container = styled.div`
    padding:10px;
    display:grid;
    justify-items:center;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));

`

const AboutText = styled.div`
    
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




const About = ()=>{
    return(
        <SuperContainer>
            <AboutText>About</AboutText>
            <DetailsText>
            <Display>
                The Elliott Engineering collective is a group of passionate software engineers 
            </Display>
                creating free and affordable software for rural communities.
            </DetailsText>

            <Container>
                {
                    aboutPageInfo.map((item,index)=>{
                        return(
                            <PriceCard key={index} >
                                <TitleImage  title={item.title} image={item.image}/>
                                <Details details={item.details}/>
                                <Subscription price={item.price} per={item.per}/> 
                                <CardButton status={item.status} buttonText={item.buttonText}/>
                            </PriceCard>
                        )
                    })
                }
            </Container>
        </SuperContainer>
    )
}


export default About;