import React,{useEffect} from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";

const Container = styled.div`
    height:100%;
    width:70%;
    position:fixed;
    background-color:${({theme})=> theme.mainColor};
    z-index:10;
    transition:all 0.25s;
    right:${({state})=>state ? 0: "-100vw"};
    display:flex;
    flex-direction:column;
    align-items:left;

    @media only screen and (min-width: 600px) {
        right:-100vw;
      }

`
const Spacing = styled.hr`
    height:5px;
    width:84%;
    background-color:white;
    border-radius:12px;
    margin:10px auto;
    box-shadow: 0 1px 3px rgb(0 0 0 / 10%), 0 2px 2px rgb(0 0 0 / 6%), 0 0 2px rgb(0 0 0 / 7%);

`

const List = styled.li`
    list-style-type: none;
    color:white;
    font-size:30px;
    padding:15px;
    
`


const SubContainer = styled.div`
    
    width:84%;
    margin:10px auto;
    display:flex;
    justify-content:space-between;
    font-size:20px;
    letter-spacing:1px;
    color:white;
`
const ButtonContainer = styled.div`
    border:2px solid white;
    border-radius:20px;
    padding:5px 10px;
    color:white;
`

const names = [{name:"Home",route:"/"},{name:"Sign up",route:"/signup"},
                {name:"Login",route:"/login"},{name:"About",route:"/about"}]

const MobileNavigation = ({clicked})=>{
    useEffect(() => {
        if(clicked){
            document.body.style.overflow = "hidden";
        }else{
            document.body.style.overflow = "scroll";
        }
        
      }, [clicked]);
    return(
        <Container state={clicked}>
            {
                names.map((item,index)=>{
                    return(
                        <Link to={item.route} key={index}>
                            <List >{item.name}</List>
                        </Link>
                    )
                    
                })
            }
            <Spacing/>
            <SubContainer>
                <Link to="/products">
                    <ButtonContainer>Products</ButtonContainer>
                </Link>
                
                <Link to="/roadmap">
                    <ButtonContainer>Map</ButtonContainer>
                </Link>
            </SubContainer>
        </Container>

    )
}

export default MobileNavigation