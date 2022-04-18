import axios from "axios";
import { httpMethodTypes } from "../Constants/loadingStates";


function getRequest(url){
    return axios.get(url)
}


const requestBackend=(url,httpMethod,postObject,headerObject)=>{
    
   
    switch(httpMethod){
        case httpMethodTypes.GET:
            return axios.get(url)
        case httpMethodTypes.POST:
            return axios.post(url,postObject,headerObject)
        default:
            console.log("NO HTTP METHOD MATCHED")
            break
    
    }
}


export {getRequest,requestBackend}