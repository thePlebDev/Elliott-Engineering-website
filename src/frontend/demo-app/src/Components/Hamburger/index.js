import React,{useState,useEffect,useRef} from "react";
import styled from "styled-components";



const Container = styled.div`
@media only screen and (min-width: 600px) {
    display:none;
  }
    

`

const BurgerLine1 = styled.div`
    width:30px;
    height:3px;
    background-color:${({theme})=> theme.mainColor};
    border-radius:5px;
    transition: all .25s ease-in-out;
    transform: ${({state})=>state ? "rotate(47deg) translate(8px, 11px)" : 0};
`
const BurgerLine2 = styled(BurgerLine1)`
    margin:5px 0;
    opacity:${({state})=>state ? 0 : 1};
    transform: 0;
`
const BurgerLine3 = styled(BurgerLine1)`
transform: ${({state})=>state ? "rotate(-47deg) translate(-1px, -5px) " : 0};
    
`


const Hamburger = ({clicked, setClicked})=>{
    
    const node = useRef();

    const handleClick =(e)=>{
        if(!node.current.contains(e.target)){
            setClicked(false);
        }
        
    }
    

    useEffect(()=>{
        document.addEventListener("mousedown",handleClick);

        //return function to be called when unmounted
        return ()=>{
            document.removeEventListener("mousedown",handleClick);
        }
    },[handleClick])

    return(
        <Container onClick={()=> setClicked(!clicked)} ref={node}>
            <BurgerLine1 state={clicked}/>
            <BurgerLine2 state={clicked}/>
            <BurgerLine3 state={clicked}/>   
        </Container>
    )
}
export default Hamburger;