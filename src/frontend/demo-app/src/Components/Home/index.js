import axios from "axios";
import React from "react";
import styled,{keyframes} from "styled-components";
import { Link } from "react-router-dom";
import HomeImage from '../../Resources/HomePageImage.png'

const Container = styled.div`
    width:80%;
    margin: 70px auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    color:${({theme})=>theme.mainColor};

    @media only screen and (min-width: 700px) {
        flex-direction:row;
      }
    
`
const appearLeft = keyframes`
      from{
          opacity:0;
          left: -30px;
      }
      to{
          opacity:1;
      }
`

const appearRight = keyframes`
      from{
          opacity:0;
          right: -30px;
      }
      to{
          opacity:1;
      }

`

const Image = styled.img`
    width:250px;
    height:200px;
    @media only screen and (min-width: 700px) {
        width:350px;
        height:300px;
    }
  @media only screen and (min-width: 900px) {
    width:450px;
    height:400px;
  }
  @media only screen and (min-width: 1200px) {
    width:550px;
    height:500px;
  }
  @media only screen and (min-width: 1300px) {
    width:710px;
    height:600px;
  }

`

const TextContainer = styled.div`
    position:relative;
   
    @media only screen and (min-width: 700px) {
        width:100%;
        height:300px;;
      }
    

`

const Text1 = styled.div`
    animation: ${appearLeft} 1.5s;
    font-size:30px;
    color:${({theme})=>theme.mainColor};
    display:none;
    @media only screen and (min-width: 700px) {
        display:block;
        position:absolute;
        left:0;
        top:15%;
      }

      @media only screen and (min-width: 900px) {
        left:5%;
        font-size:40px;
      }
`

const Text2 = styled.div`
    font-size:30px;
    animation: ${appearRight} 1.5s;
    color:${({theme})=>theme.mainColor};
    display:none;
    
    @media only screen and (min-width: 700px) {
        display:block;
        position:absolute;
        right:0;
        top:35%;
      }

      @media only screen and (min-width: 900px) {
        right:5%;
        font-size:40px;
      }
    

`

const Text3 = styled.div`
    font-size:25px;
    color:${({theme})=>theme.mainColor};
    max-width:300px;
    border:${({theme})=>"1px solid " + theme.mainColor};
    border-radius:12px;
    padding:12px 8px;
    cursor:pointer;
    box-shadow: 0 1px 3px rgb(0 0 0 / 10%), 0 2px 2px rgb(0 0 0 / 6%), 0 0 2px rgb(0 0 0 / 7%);
    transition:all 0.25s;
    margin-top:20px;
    

    &:hover{
        transform: scale(1.1);
    }
    @media only screen and (min-width: 700px) {
        font-size:20px;
        width:80%;
        margin:0 auto;
        text-align:center;
        position:absolute;
        top:60%;
        left:10%;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
      }
    
`

const TitleText =styled.h2`
    margin-bottom:20px;
    @media only screen and (min-width: 700px) {
        display:none;
      }
`


const Home =()=>{

    return(
        <Container>
            <TitleText>Elliott Engineering</TitleText>
            <Image src={HomeImage} />  
            <TextContainer>
            <Text1>Old Problems</Text1>
            <Text2>New Solutions</Text2>
            <Link to="/about">
              <Text3>Learn more</Text3>
            </Link>
            </TextContainer>
        </Container>

    )
}

export default Home