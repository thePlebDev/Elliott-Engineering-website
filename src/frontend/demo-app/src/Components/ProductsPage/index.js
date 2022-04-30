import React,{useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"

import CardContainer from "../Cards/cardContainer";
import AndroidImage from "../../Resources/android.png"

import productPageInfo from "../../Utils/Constants/productsPageInfo";
import softwareLibraryInfo from '../../Utils/Constants/softwareLibraryInfo'


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


const Title = styled.div`
    color: #888;
    font-size:25px;
    font-weight: 600;
    letter-spacing: 1px;

`
const Image = styled.img`
    
    border:${({theme})=>"1px solid " + theme.mainColor};
    border-radius:12px;
    width:80%;
    height:130px;
    margin:5px auto;
    margin-bottom:10px;

`
const Details = styled.div`
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

const TagContainer = styled.div`
   
    display:flex;
    width:90%;
    justify-content:space-around;

`
const Tag = styled.div`
  border:${({theme})=>"1px solid " + theme.mainColor};
  color:${({theme})=> theme.mainColor};
  padding:5px 8px;
  border-radius:4px;
  font-size:13px;

`
const Tag2 = styled(Tag)`
  font-size:20px;
  padding:6px 10px;
  margin-bottom:12px;
  cursor:pointer;
  background-color:${({theme})=>theme.mainColor};
  color:white;
  transition: all 0.25s;
  
  &:hover{
      transform:scale(1.1);
  }

`
const AboutText = styled.div`
    font-weight: 700;
    text-align:center;
    margin:10px;
    padding:10px;
    cursor:pointer;
    border-radius:8px;
    box-shadow: 0 1px 3px rgb(0 0 0 / 10%), 0 2px 2px rgb(0 0 0 / 6%), 0 0 2px rgb(0 0 0 / 7%);
    
    border:${({theme})=> "2px solid " + theme.mainColor};
   

`
const TextContainer = styled.div`
    margin:2rem auto;
    font-size:20px;
    letter-spacing:1px;
    display:flex;
    justify-content:space-between;
    

    @media only screen and (min-width: 600px) {
        font-size:30px;
      }



`


const ProductsPage = ()=>{
    const [state,setState] = useState(true);

    const handleClick = (state)=>{
        setState(state)
    }
    return(
        <SuperContainer>
            <TextContainer>
                <AboutText state={state} onClick={()=>handleClick(true)}>Products</AboutText>
                <AboutText state={state} onClick={()=>handleClick(false)}>Libraries</AboutText>
            </TextContainer>
            
            <Container>
                {
                    state
                      ?
                    productPageInfo.map((item)=>{
                        return(
                            <CardContainer key={item.id}>
                                <Image src={AndroidImage}/>
                                <Title>{item.title}</Title>
                                <Hr/>
                                <Details>
                                    {item.details}
                                </Details>
                                <Hr/>
                                <TagContainer>
                                    {
                                        item.infoTags.map((item)=>{
                                            return(
                                                <Tag key={item.id}>{item.title}</Tag>
                                            )
                                        })
                                    }
                                </TagContainer>
                                <Hr/>
                                <TagContainer>
                                    {
                                        item.DemoApp.map((item)=>{
                                            return (
                                                    <a href={item.link} target="_blank">
                                                        <Tag2>
                                                            {item.title}
                                                        </Tag2>
                                                    </a>
                                                    )
                                        })
                                    }
                                </TagContainer>  
                         </CardContainer>

                        )
                    })
                    :
                    softwareLibraryInfo.map((item)=>{
                        return(
                            <CardContainer key={item.id}>
                                <Image src={AndroidImage}/>
                                <Title>{item.title}</Title>
                                <Hr/>
                                <Details>
                                    {item.details}
                                </Details>
                                <Hr/>
                                <TagContainer>
                                    {
                                        item.infoTags.map((item)=>{
                                            return(
                                                <Tag key={item.id}>{item.title}</Tag>
                                            )
                                        })
                                    }
                                </TagContainer>
                                <Hr/>
                                <TagContainer>
                                    {
                                        item.links.map((item)=>{
                                            return (
                                                    <a href={item.link} target="_blank">
                                                        <Tag2>
                                                            {item.title}
                                                        </Tag2>
                                                    </a>
                                                    )
                                        })
                                    }
                                </TagContainer>  
                         </CardContainer>

                        )
                        
                    })
                }
                
            </Container>
        </SuperContainer>
    )
}

export default ProductsPage;