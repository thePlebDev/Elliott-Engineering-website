import React from "react";
import styled from 'styled-components'
import { Link } from "react-router-dom";
import Logo from '../../Resources/foregroud.png'
import Hamburger from "../Hamburger";

const Head = styled.header`
    z-index:9999999;


`

const Navigation = styled.nav`
z-index:9999999;
box-shadow: 0 1px 3px rgb(0 0 0 / 10%), 0 2px 2px rgb(0 0 0 / 6%), 0 0 2px rgb(0 0 0 / 7%);
box-sizing: inherit;
color: ${({theme})=>theme.mainColor};
display:flex;
padding:0 10px;
justify-content:space-between;
align-items:center;


height:64px;
@media only screen and (min-width: 600px) {
    height:100px;
  }

`
const Image = styled.img`

  width:64px;
  height:64px;
  @media only screen and (min-width: 600px) {
    height:94px;
    width:94px;
  }

`
const TitleContainer = styled.div`
  display:flex;
  align-items:center;
  
`
const TitleText = styled.div`
  color:${({theme})=>theme.mainColor};
  display:none;
  margin-left:20px;
  font-size:25px;
  font-weight:700;
  letter-spacing:1px;
  @media only screen and (min-width: 940px) {
    display:block
  }

`
const LinksContainer = styled.div`
  display:none;
 
  padding:5px;
  @media only screen and (min-width: 600px) {
    display:flex;
  }
`

const Links = styled.div`
  margin:0px 20px;
  font-size:23px;
  cursor:pointer;
  color:${({theme})=>theme.mainColor};
  transition:all 0.25s;
  &:hover{
    transform: scale(1.1);
  }

`

const Header =({clicked,setClicked})=>{
    return(
        <Head>
            <Navigation>
                <TitleContainer>
                  <Link to="/">
                    <Image src={Logo} />
                  </Link>
                  <Link to="/">
                    <TitleText>Elliott Engineering</TitleText>
                  </Link>
                </TitleContainer>
                <LinksContainer>
                <Link to="/signup">
                    <Links>Sign up</Links>
                  </Link>
                  <Link to="/login">
                    <Links>Login</Links>
                  </Link>
                  <Link to="/about">
                    <Links>About</Links>
                  </Link>
                  <Link to="/products">
                    <Links>Products</Links>
                  </Link>
                  <Link to="/roadmap">
                    <Links>Road map</Links>
                  </Link>
                  
                </LinksContainer>
                <Hamburger clicked={clicked} setClicked={setClicked}/>
            </Navigation>
        </Head>
    )
}

export default Header