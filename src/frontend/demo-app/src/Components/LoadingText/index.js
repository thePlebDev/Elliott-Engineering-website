import React from 'react';
import styled,{keyframes} from 'styled-components'

import Fail from './fail';
import Success from './success';
import Loading from './loading';

import { formLoadingStates } from '../../Utils/Constants/loadingStates';


const Container = styled.div`
    max-width:500px;
    font-size: 1.4rem;
    font-weight: 700;
    text-align:center;
    margin:2rem auto;
    padding:12px 4px;
    @media only screen and (min-width: 800px) {
        font-size: 1.8rem;
    } 

`

//THIS CAN BE A SWITCH STATEMENT
const LoadingText =({state, message})=>{
    switch(state){
        case formLoadingStates.RESTING:
            return <Container>{message}</Container>
        
        case formLoadingStates.LOADING:
            return <Loading message={message}/>

        case formLoadingStates.SUCCESS:
            return <Success message={message}/>

        case formLoadingStates.FAIL:
            return <Fail message={message}/>

    }
}


export default LoadingText