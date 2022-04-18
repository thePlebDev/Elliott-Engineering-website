import React,{useState} from "react";
import styled from "styled-components"
import { CardElement,CardElementContainer,useElements,useStripe } from "@stripe/react-stripe-js";
import axios from "axios";

import FormContainer from "../Forms/formContainer";
import Form from "../Forms";
import InputForm from "./inputForm";
import SubscribeForm from './subscribeForm'

import SubscriptionInput from "../Forms/subscriptionInput";
import StatusMessages,{useMessages} from "../../Utils/statusMessages";

const TestSubcription =()=>{
    const element = useElements();
    const stripe = useStripe();

    const [show,setShowState] = useState(true)

    const [state,setInputState] = useState({username:"",password:"",email:""});
    
    

    return(
        <>
        {
            show
              ?
           <InputForm setShow={setShowState} inputState={state} setState={setInputState}/>
              :
              <SubscribeForm userDetails={state}/>
        }
        

        </>
    )
}

export default TestSubcription