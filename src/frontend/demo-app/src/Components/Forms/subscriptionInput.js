import React,{useState} from "react";
import styled from "styled-components";


const Container = styled.div`
    border-radius: 8px;
    outline:none;
    margin:10px 0;
    margin-bottom:20px;
    border:${({state})=> state ? "2px solid #00a862" : "2px solid red"};
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




const SubscriptionInput =()=>{
    const [clicked, setClicked] = useState(true)

    const handleClick=()=>{
        setClicked(!clicked);
    }
    
    return(
        <Container onClick={()=>handleClick()} state={clicked}>
            <SubContainer>
                <CheckBox type="checkbox" checked={clicked}/>
            </SubContainer>
            <MonthlyText>Supporter tier</MonthlyText>
            <div>
                <Money>$5</Money>
                <MoneyText>/Month</MoneyText>
             </div>
            
        </Container>
    )

}


export default SubscriptionInput;

