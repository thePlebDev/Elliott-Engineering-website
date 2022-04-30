import React,{useState,useRef,useEffect} from "react";
import styled from "styled-components";


const Container = styled.div`
    border-radius: 8px;
    outline:none;
    margin:10px 0;
    margin-bottom:20px;
    border: 2px solid #00a862;
    display:flex;
    flex-direction:column;
    padding:15px;
    cursor:pointer;
    transition:all 0.25s;
    
    &:hover{
        box-shadow: 0 2px 4px rgb(0 0 0 / 7%), 0 4px 5px rgb(0 0 0 / 6%), 0 1px 10px rgb(0 0 0 / 10%);
    }
    
`
const MonthlyText = styled.div`
    font-weight:700;
    letter-spacing:1px;
    font-size:15px;
    text-transform:uppercase;
    opacity:0.6;
`

const Money = styled.span`
    font-size:40px;
    color:${({theme})=>theme.mainColor};
    font-weight:700;
`
const MoneyText = styled.span`
    color: #888;
    font-weight:700;

`
const SubContainer = styled.div`
    
    position:relative;

`
const CheckBox = styled.input`
    border:2px solid blue;
    position:absolute;
    right:0;
    height:20px;
    width:20px;
    accent-color:${({theme})=>theme.mainColor};

`




const SubscriptionInput =({title,amount,value,handleChange})=>{
    
    
    return(
        <Container  onClick={()=>handleChange()}>
            <SubContainer>
                <CheckBox type="radio" name="Subscription" onChange={()=>handleChange()} checked={value}  />
            </SubContainer>
            <MonthlyText>{title} tier</MonthlyText>
            <div>
                <Money>${amount}</Money>
                <MoneyText>/Month</MoneyText>
             </div>
            
        </Container>
    )

}


export default SubscriptionInput;

