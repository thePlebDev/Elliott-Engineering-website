import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"

import FormContainer from "../Forms/formContainer";
import LoadingText from "../LoadingText";
import ErrorNotifications from "../ErrorNotifications";
import Form from "../Forms";
import TextInput from "../Forms/textInput";
import SignInButton from "../Buttons/signinButton";
import SubscriptionInput from "../Forms/subscriptionInput";

import useFormHook from "../../Hooks/useFormHook";
import {passwordCurryCheck} from "../../Utils/validationFunctions/validateSignupForm";
import { getRequest,requestBackend } from "../../Utils/RequestFunctions";
import { formLoadingStates } from "../../Utils/Constants/loadingStates";
import { httpMethodTypes } from "../../Utils/Constants/loadingStates";

const ForgotText = styled.div`
    color: #006241;
    text-decoration: underline;
    font-weight:700;
    margin-top:10px;
    cursor:pointer;

`

const Login =()=>{

    const {state,errors,status,handleChange,handleSubmit} = useFormHook(passwordCurryCheck,
        {username:"",password:""},
        requestBackend,
        {loadingState:formLoadingStates.RESTING,message:"Login"},
        "/api/v1/user/login",
        httpMethodTypes.POST,
        true,
        "/account/personal")

    return(
        <>
        <LoadingText state={status.loadingState} message={status.message}  />
        <FormContainer>
            <ErrorNotifications errors={errors}/>
            <Form handleSubmit={handleSubmit}>
                <TextInput type="text" placeHolder={"Username"} errors={errors.username} value={state.username} name="username" handleChange={handleChange} />
                <TextInput type="password" placeHolder={"Password"} errors={errors.password} value={state.password} name="password" handleChange={handleChange} />
                <SubscriptionInput/>
                <Link to="/signup">
                    <ForgotText>Create an account here</ForgotText>
                </Link>
                <SignInButton text={"Login"}/>
            </Form>
        </FormContainer>
        </>

    )
}



export default Login