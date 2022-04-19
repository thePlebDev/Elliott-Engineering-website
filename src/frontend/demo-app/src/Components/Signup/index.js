import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import FormContainer from "../Forms/formContainer";
import LoadingText from "../LoadingText";
import Form from "../Forms";
import TextInput from "../Forms/textInput";
import SignInButton from "../Buttons/signinButton";
import SubscriptionInput from "../Forms/subscriptionInput";
import ErrorNotifications from "../ErrorNotifications";

import {formLoadingStates} from '../../Utils/Constants/loadingStates'
import useFormHook from "../../Hooks/useFormHook";
import {passwordCurryCheck} from "../../Utils/validationFunctions/validateSignupForm";
import {getRequest,requestBackend} from "../../Utils/RequestFunctions";
import { httpMethodTypes } from "../../Utils/Constants/loadingStates";


const ForgotText = styled.div`
    color: #006241;
    text-decoration: underline;
    font-weight:700;
    margin-top:10px;
    cursor:pointer;

`



const Signup =()=>{

    const {state,errors,status,handleChange,handleSubmit} = useFormHook(passwordCurryCheck,
        {email:"",password1:"",password2:""},
        requestBackend,
        {loadingState:formLoadingStates.RESTING,message:"Signup and support"},
        "/api/v1/user/signup",
        httpMethodTypes.POST,
        )
    

    return(
        <>
        <LoadingText state={status.loadingState} message={status.message}  />
        <FormContainer>
            <ErrorNotifications errors={errors}/>
            <Form handleSubmit={handleSubmit}>
                <TextInput type="email" placeHolder={"Email"} errors={errors.email} value={state.email} name="email" handleChange={handleChange} />
                <SubscriptionInput/>
                <TextInput type="password" placeHolder={"Password"} errors={errors.password1} value={state.password1} name="password1" handleChange={handleChange} />
                <TextInput type="password" placeHolder={"Confirm password"} errors={errors.password2} value={state.password2} name="password2" handleChange={handleChange} />
                <Link to="/login">
                    <ForgotText>Already have an account ?</ForgotText>
                </Link>
                <SignInButton text={"Sign up"}/>
            </Form>

        </FormContainer>
        </>

    )
}



export default Signup