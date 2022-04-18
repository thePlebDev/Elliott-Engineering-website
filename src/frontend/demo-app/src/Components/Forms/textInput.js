import React,{useState} from 'react';
import styled from 'styled-components';

const LabelContainer = styled.div` 
     width:100%; 
     position:relative;
     margin-bottom:10px;
`
const Label = styled.div`
   
`

const Input = styled.input`
border-radius: 8px;
border:1px solid rgba(0,0,0,0.6);
outline:none;
padding: 12px 16px;
width:100%;
color: rgba(0,0,0,.87);
margin-top:5px;
margin-bottom:10px;
font-size:20px;
focus:true;
border-color:${({errors})=>errors ? "red" :"rgba(0,0,0,0.7)"};


`


const TextInput = ({errors,handleChange,value,name,type,placeHolder})=>{
    const [clicked,setClicked] = useState(false);
    const handleClickSetting =()=>{
        setClicked(true)
    }

    return(
        <LabelContainer onClick={()=>{handleClickSetting()}}>
            <Label htmlFor={name} >  </Label>
            <Input errors={errors} placeholder={placeHolder} id={name} type={type} onChange={(e)=>handleChange(e)} name={name} value={value} />
        </LabelContainer>
    )
}

export default TextInput